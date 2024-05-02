import { css } from '@emotion/react';

const blinkerFont = css`
  @import url('https://fonts.googleapis.com/css2?family=Blinker&display=swap');
`;

const quicksandFont = css`
  @import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');
`;

export const UserProfileCardRoot = css`
  display: flex;
  gap: 1rem;
  heigth: auto;
  width: fit-content;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 0.8rem;
  justify-content: center;
  align-items: center;
`;
export const UserProfileCardImage = css`
  height: 7rem;
  border-radius: 9999px;
`;
export const UserProfileCardHead = css`
  ${blinkerFont};
  font-family: 'Blinker', sans-serif;
`;

export const UserProfileCardBody = css`
  ${quicksandFont};
  font-family: 'Quicksand', sans-serif;
`;
