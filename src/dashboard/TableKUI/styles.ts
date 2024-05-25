import { css } from '@emotion/react';
import ROOT from 'common/root';

export const TableStyle = css`
  font-family: Quicksand, sans-serif;
  font-size: 1rem;
  border-collapse: collapse;
  border-radius: 0.5rem;
  background-color: #ddd2;
  box-shadow: 0 2px 4px 0 #ddd;
  overflow: hidden;
`;

export const TableHeaderStyle = css`
  font-family: Blinker, sans-serif;
  background-color: ${ROOT.color.triada.morado};
`;

export const TableBodyStyle = css`
  font-family: Quicksand, sans-serif;
`;
export const TableBodyRowStyle = css`
  font-family: Quicksand, sans-serif;
  border: 0 solid ${ROOT.color.gray[100]};
  border-width: 1px 0;
`;

export const TableHeaderRowStyle = css`
  font-family: Blinker, sans-serif;
`;

export const TableHeaderCellStyle = css`
  font-family: Blinker, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;

  padding: 0.25rem 0.25rem;
  box-sizing: border-box;
`;

export const TableBodyCellStyle = css`
  font-family: Quicksand, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;

  padding: 0.25rem 0.5rem;
  box-sizing: border-box;
`;
