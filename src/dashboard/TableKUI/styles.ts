import styled from 'styled-components';
import ROOT from '../../common/root';
import { AtomDiv, AtomTable, AtomTd, AtomTh, TableHead, AtomTr } from '../../element';
import { Size } from './type';

export const TableStyled = styled(AtomTable)<Size>`
  width: ${({ width = '100%' }) => width};
  height: ${({ height = '100%' }) => height};
  font-family: Quicksand, sans-serif;
  font-size: 1rem;
  border-collapse: collapse;
  border-radius: 0.125rem;
  background-color: #ddd2;
  /* box-shadow: 0 2px 4px 0 #ddd; */
  overflow: hidden;
`;

export const ThStyled = styled(AtomTh)`
  font-family: Blinker, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;

  padding: 0.25rem 0.25rem;
  box-sizing: border-box;
`;

export const HeaderTrStyled = styled(AtomTr)`
  font-family: Blinker, sans-serif;
  font-size: 1.125rem;
  font-weight: 400;
`;

export type ITHeader = { bgcolor?: string };
export const THeaderStyled = styled(TableHead)<ITHeader>`
  font-family: Blinker, sans-serif;
  background-color: ${({ bgcolor = '#583D6B' }) => bgcolor};
`;

export const BodyTrStyled = styled(AtomTr)`
  font-family: Quicksand, sans-serif;
  font-size: 0.75rem;
  border: 0 solid ${ROOT.color.gray[100]};
  border-width: 1px 0;
`;

export const BodyTdStyled = styled(AtomTd)`
  font-family: Quicksand, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;

  padding: 0.25rem 0.5rem;
  box-sizing: border-box;
`;

export const FooterStyled = styled(AtomTd)<ITHeader>`
  padding: 0.25rem;
  background-color: ${({ bgcolor = '#583D6B' }) => bgcolor};
`;

export const Pagination = styled(AtomDiv)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
