import { css } from '@emotion/react';
import { StyledType, StyledType2 } from './types';

  const estilos = css`
  font-size: 12px;
  padding: 5px 20px;
  border-radius: 7px;
  color: white;
  text-align: center;
  width: 100px;
  `

 const mainColor = css`
  ${estilos}
  background-color: #643d67;
`;
 const blueColor = css`
 ${estilos}
 background-color: blue;
  
`;
 const yellowColor = css`
  ${estilos}
  background-color: yellow;
  color: black;
  
`;
 const redColor = css`
 ${estilos}
  background-color: red;
  
`;
 const blackColor = css`
 ${estilos}
  background-color: black;
 
`;
 const whiteColor = css`
 ${estilos}
  background-color: white;
  color: black;
  
`;

const borderNone = css`
`;
const borderSolid = css`

border: 2px solid black;
`;
const borderDashed = css`
border: 2px dashed black;
`;
const borderDotted = css`
border: 2px dotted black;
`;

export const stylesBorder: StyledType2 ={
  none: borderNone,
  solid: borderSolid,
  dashed: borderDashed,
  dotted: borderDotted,

}
export const stylesBackground: StyledType ={
  main: mainColor,
  blue: blueColor,
  yellow: yellowColor,
  red: redColor,
  black: blackColor,
  white: whiteColor,
}