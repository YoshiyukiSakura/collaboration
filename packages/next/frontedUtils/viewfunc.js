import nextApi from "../services/nextApi";
import { signApiData } from "../services/chainApi";

export function validateProposal(formData) {
  const fields = [
    "space",
    "title",
    "content",
    "contentType",
    "choiceType",
    "choices",
    "startDate",
    "endDate",
    "snapshotHeights",
    "address",
    "proposerNetwork",
  ];
  for (let field of fields) {
    if (!formData[field] || formData[field]?.length === 0) {
      return `${field} must not be empty.`;
    }
  }
  if (!(formData.endDate > formData.startDate)) {
    return `End date should be greater than start date!`;
  }
  if (!(formData.choices.length >= 2)) {
    return `Choices must be more than one.`;
  }
  if (formData.choices.length !== new Set(formData.choices).size) {
    return `Every choice must be unique.`;
  }
  const now = new Date().getTime();
  if (formData.endDate <= now) {
    return `End date should be greater than current time!`;
  }
  return false;
}

export async function createProposal(proposal) {
  const { address, ...data } = proposal;
  const signedData = await signApiData(
    {
      ...data,
      version: "2",
    },
    address
  );

  return await nextApi.post(`${proposal.space}/proposals`, signedData);
}

export async function signProposal(proposal) {
  const { address, ...data } = proposal;
  return await signApiData(
    {
      ...data,
      version: "2",
    },
    address
  );
}

export async function addComment(
  space,
  proposalCid,
  content,
  contentType,
  address,
  commenterNetwork
) {
  const signedData = await signApiData(
    {
      proposalCid,
      content,
      contentType,
      commenterNetwork,
      version: "2",
    },
    address
  );

  return await nextApi.post(`${space}/comments`, signedData);
}

export async function signComment(
  space,
  proposalCid,
  content,
  contentType,
  address,
  commenterNetwork
) {
  return await signApiData(
    {
      proposalCid,
      content,
      contentType,
      commenterNetwork,
      version: "2",
    },
    address
  );
}

export async function addVote(
  space,
  proposalCid,
  choice,
  remark,
  address,
  realVoter,
  voterNetwork
) {
  const signedData = await signApiData(
    {
      proposalCid,
      choice,
      remark,
      realVoter,
      voterNetwork,
      version: "2",
    },
    address
  );

  return await nextApi.post(`${space}/votes`, signedData);
}

export async function signVote(
  space,
  proposalCid,
  choice,
  remark,
  address,
  realVoter,
  voterNetwork
) {
  return await signApiData(
    {
      proposalCid,
      choice,
      remark,
      realVoter,
      voterNetwork,
      version: "2",
    },
    address
  );
}
