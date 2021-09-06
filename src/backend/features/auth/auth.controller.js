const { ObjectId } = require("mongodb");
const argon2 = require("argon2");
const { randomBytes } = require("crypto");
const validator = require("validator");
const authService = require("../../services/auth.service");
// const mailService = require("../../services/mail.service");
const {
  getUserCollection,
  getAttemptCollection,
} = require("../../mongo/common");
const { HttpError } = require("../../exc");
const { isValidSignature, validateAddress } = require("../../utils");

async function signup(ctx) {
  const { username, email, password } = ctx.request.body;

  if (!username) {
    throw new HttpError(400, { username: ["Username is missing"] });
  }

  if (!email) {
    throw new HttpError(400, { email: ["email is missing"] });
  }

  if (!password) {
    throw new HttpError(400, { password: ["Password is missing"] });
  }

  if (!username.match(/^[a-zA-Z][a-zA-Z0-9_]{2,15}$/)) {
    throw new HttpError(400, {
      username: [
        "Invalid username. It should start with alpha, and only contains alpha, numeric and underscore. The length must between 3 to 16",
      ],
    });
  }

  if (!validator.isEmail(email)) {
    throw new HttpError(400, { email: ["Invaild email"] });
  }

  const userCol = await getUserCollection();

  let existing = await userCol.findOne({ email });
  if (existing) {
    throw new HttpError(403, { email: ["Email already exists."] });
  }

  const userid = username.toLowerCase();

  existing = await userCol.findOne({ userid });
  if (existing) {
    throw new HttpError(403, { username: ["Username already exists."] });
  }

  const hashedPassword = await argon2.hash(password);

  const verifyToken = randomBytes(12).toString("hex");

  const now = new Date();
  const result = await userCol.insertOne({
    userid,
    username,
    email,
    hashedPassword,
    verifyToken,
    createdAt: now,
  });

  if (!result.result.ok) {
    throw new HttpError(500, "Signup error, cannot create user.");
  }

  const insertedUser = result.ops[0];
  const accessToken = await authService.getSignedToken(insertedUser);
  const refreshToken = await authService.getRefreshToken(insertedUser);

  ctx.body = {
    username: insertedUser.username,
    email: insertedUser.email,
    accessToken,
    refreshToken,
  };
}

async function verify(ctx) {
  const { email, token } = ctx.request.body;

  if (!email) {
    throw new HttpError(400, { email: ["Email is missing"] });
  }

  if (!token) {
    throw new HttpError(400, { token: ["Token is missing"] });
  }

  const userCol = await getUserCollection();

  const user = await userCol.findOne({ email });
  if (!user) {
    throw new HttpError(404, { email: ["Email does not exists."] });
  }

  if (user.emailVerified) {
    throw new HttpError(400, "Email is already verified.");
  }

  if (user.verifyToken !== token) {
    throw new HttpError(400, { token: ["Incorrect token."] });
  }

  const result = await userCol.updateOne(
    { _id: user._id },
    {
      $set: {
        emailVerified: true,
      },
    }
  );

  if (!result.result.ok) {
    throw new HttpError(500, "Db error: email verification.");
  }

  if (result.result.nModified === 0) {
    throw new HttpError(500, "Failed to verify email.");
  }

  ctx.body = true;
}

async function login(ctx) {
  const { usernameOrEmail, password } = ctx.request.body;

  if (!usernameOrEmail) {
    throw new HttpError(400, {
      usernameOrEmail: ["Email or username must be provided"],
    });
  }

  if (!password) {
    throw new HttpError(400, { password: ["Password is missing"] });
  }

  const userCol = await getUserCollection();

  const user = await userCol.findOne({
    $or: [
      { email: usernameOrEmail },
      { userid: usernameOrEmail.toLowerCase() },
    ],
  });

  if (!user) {
    throw new HttpError(404, { usernameOrEmail: ["User does not exists."] });
  }

  const correct = await argon2.verify(user.hashedPassword, password);
  if (!correct) {
    throw new HttpError(401, { password: ["Incorrect password."] });
  }

  const accessToken = await authService.getSignedToken(user);
  const refreshToken = await authService.getRefreshToken(user);

  ctx.cookies.set("auth-token", accessToken, {
    httpOnly: true,
    sameSite: "lax",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });

  ctx.body = {
    username: user.username,
    email: user.email,
    accessToken,
    refreshToken,
  };
}

async function logout(ctx) {
  ctx.cookies.set("auth-token");
  ctx.body = true;
}

async function refresh(ctx) {
  const { refreshToken } = ctx.request.body;

  if (!refreshToken) {
    throw new HttpError(400, "Refresh token is missing");
  }

  const accessToken = await authService.refresh(refreshToken);
  ctx.body = {
    accessToken,
  };
}

module.exports = {
  signup,
  login,
  logout,
  verify,
  refresh,
  // forgetPassword,
  // resetPassword,
  // addressLoginStart,
  // addressLoginConfirm,
};
