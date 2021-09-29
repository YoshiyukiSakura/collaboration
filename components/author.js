import styled from "styled-components";
import { addressEllipsis } from "utils";

import Avatar from "./avatar";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: #2e343d;
`;

// const Avatar = styled.img`
//   width: 24px;
//   height: 24px;
//   margin-right: 8px;
// `;

const Name = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  margin-left: 8px;
`;

export default function Author({ address }) {
  return (
    <Wrapper>
      <Avatar address={address} />
      <Name>{addressEllipsis(address)}</Name>
    </Wrapper>
  );
}
