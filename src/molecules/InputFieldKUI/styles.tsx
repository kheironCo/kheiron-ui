import { css } from '@emotion/react';

export const divStyles = css`
  display: flex;
  flexDirection: column;
 `;

export const labelParentDiv = css`
  color: grey;
  margin: 5px;
  `

export const  input = css`
  width: 200px;
  border: none; 
  margin: 5px;
  border-bottom: 2px solid grey;

  &:focus {
    outline: none;
    border: none;
    border-bottom: solid #33c4b5 2px;
  }
`
