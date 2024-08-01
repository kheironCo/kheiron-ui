import { AtomSection, Heading, Paragraph } from "../../element";
import styled, { css } from "styled-components";

export const UserProfileCardRoot = styled(AtomSection)`
  width: fit-content;
  height: auto;
  padding: 0.25rem 1rem 0.25rem 0.5rem;
  background-color: #4441;
  border-radius: 0.5rem;
  box-sizing: border-box;
  display: flex;
  gap: 1rem;
  justify-content: left;
  align-items: center;
`;
export const UserProfileCardImage = css`
  height: 2rem;
`;
export const UserProfileCardHead = styled(Heading)`
  font-size: 1rem;
  font-weight: 500;
`;

export const UserProfileCardBody = styled(Paragraph)`
  font-size: 0.75rem;
`;
