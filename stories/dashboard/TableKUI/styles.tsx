import { Paragraph } from 'element';
import styled from 'styled-components';
import { UserProfileCardKUI } from 'utils';

export const ParagraphStyle = styled(Paragraph)`
  font-family: monospace;
  font-size: 0.875rem;
  color: #777;
`;

export const UserCardStyled = styled(UserProfileCardKUI)`
  cursor: pointer;
  & .KUI-user-profile-card-root:hover {
    box-shadow: 0 0 0 0.25rem #7773;
  }
  & .KUI-user-profile-card-root {
    width: 100%;
    justify-content: left;
    box-sizing: border-box;
  }
`;
