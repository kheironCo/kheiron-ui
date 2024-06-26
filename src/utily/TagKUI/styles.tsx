import { css } from '@emotion/react';
import { StyledBgType, StyledBorderType } from './types';

const generalStyle = css`
  font-size: 12px;
  padding: 5px 20px;
  border-radius: 7px;
  color: white;
  text-align: center;
  width: 100px;
`;

const mainColor = css`
  ${generalStyle}
  background-color: #643d67;
`;
const blueColor = css`
  ${generalStyle}
  background-color: blue;
`;
const yellowColor = css`
  ${generalStyle}
  background-color: yellow;
  color: black;
`;
const redColor = css`
  ${generalStyle}
  background-color: red;
`;
const blackColor = css`
  ${generalStyle}
  background-color: black;
`;
const whiteColor = css`
  ${generalStyle}
  background-color: white;
  color: black;
`;

const borderNone = css``;
const borderSolid = css`
  border: 2px solid black;
`;
const borderDashed = css`
  border: 2px dashed black;
`;
const borderDotted = css`
  border: 2px dotted black;
`;

export const stylesBorder: StyledBorderType = {
  none: borderNone,
  solid: borderSolid,
  dashed: borderDashed,
  dotted: borderDotted,
};
export const stylesBackground: StyledBgType = {
  main: mainColor,
  blue: blueColor,
  yellow: yellowColor,
  red: redColor,
  black: blackColor,
  white: whiteColor,
};
