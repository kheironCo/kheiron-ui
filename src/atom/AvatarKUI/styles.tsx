import { css } from '@emotion/react';

const blinkerFont = css`
  @import url('https://fonts.googleapis.com/css2?family=Blinker&display=swap');
`;

export const AvatarRoot = css`
  height: 7rem;
  border-radius: 9999px;
`;

export const AvatarAlt = css`
  ${blinkerFont};
  font-family: 'Blinker', sans-serif;
  display: flex;
  height: 7rem;
  width: 7rem;
  border-radius: 9999px;
  background-color: magenta;
  color: white;
  font-size: 4rem;
  font-weight: bold;
  justify-content: center;
  align-items: center;
`;
