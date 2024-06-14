import { css } from '@emotion/react';

export const divStyles = css`
  display: flex;
  flexdirection: column;
`;

export const labelParentDiv = css`
  color: #64467a;
  margin: 5px;
`;

export const input = css`
  background-color: #f3f1f1;
  border: none;
  padding: 6px;
  border-radius: 5px;
  &:focus {
    outline: none;
    border: none;
  }
`;
