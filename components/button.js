import styled, { css } from "styled-components";
import { p_16_medium } from "../styles/textStyles";

const Wrapper = styled.div`
  ${p_16_medium};
  text-align: center;
  padding: 7px 15px;
  border: 1px solid #b7c0cc;
  cursor: pointer;
  color: #1e2134;
  ${(p) =>
    p.primary &&
    css`
      padding: 8px 16px;
      border: none;
      color: #ffffff;
      background: #191e27;
      &:hover{
        background: #404753;
      }
    `}
`;

export default function Button({ children, ...props }) {
  return <Wrapper {...props}>{children}</Wrapper>;
}
