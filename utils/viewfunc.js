import nextApi from "../services/nextApi";
import { signApiData } from "../services/chainApi";

export function validateProposal(formData) {
  const fields = ['space', 'title', 'content', 'contentType', 'choiceType', 'choices', 'startDate', 'endDate', 'snapshotHeight', 'address',];
  for (let field of fields) {
    if (!formData[field] || formData[field]?.length === 0) {
      return `${field} must not be empty.`;
    }
  }
  if (!(formData.endDate > formData.startDate)) {
    return `The end date must be greater than start date.`;
  }
  if (!(formData.choices.length >= 2)) {
    return `Choices must be more than one.`;
  }
  return false;
}

export async function createProposal(proposal) {
  const {address, ...data} = proposal;
  const signedData = await signApiData({
    ...data,
    version: "1",
  }, address);

  return await nextApi.post(`${proposal.space}/proposals`, signedData);
}

export async function addComment(space, proposalCid, content, contentType, address) {
  const signedData = await signApiData({
    proposalCid,
    content,
    contentType,
    version: "1",
  }, address);

  return await nextApi.post(`${space}/comments`, signedData);
}

export async function addVote(space, proposalCid, choice, remark, address, realVoter) {
  const signedData = await signApiData({
    proposalCid,
    choice,
    remark,
    realVoter,
    version: "1",
  }, address);

  return await nextApi.post(`${space}/votes`, signedData);
}
