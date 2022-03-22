const {
  karuraTokenConfig,
  bifrostTokenConfig,
  statemineCommonConfig,
} = require("./consts");

const config = {
  id: "rmrk",
  name: "RMRK",
  symbol: "RMRK",
  decimals: 10,
  networks: [
    {
      type: "asset",
      network: "statemine",
      ss58Format: 2,
      assetId: 8,
    },
    karuraTokenConfig,
    bifrostTokenConfig,
  ],
  proposeThreshold: "500000000000000",
  voteThreshold: "10000000000",
  weightStrategy: ["balance-of", "quadratic-balance-of", "biased-voting"],
  version: "2",
};

const curationConfig = {
  id: "rmrk-curation",
  name: "RMRK Curation",
  symbol: "RMRK",
  decimals: 10,
  networks: [
    {
      ...statemineCommonConfig,
      assetId: 8,
    },
    karuraTokenConfig,
    bifrostTokenConfig,
  ],
  proposeThreshold: "4310000000000",
  voteThreshold: "10000000000",
  weightStrategy: ["balance-of", "quadratic-balance-of", "biased-voting"],
  version: "2",
};

module.exports = {
  rmrkConfig: config,
  rmrkCurationConfig: curationConfig,
};
