import styled from 'styled-components';
import { AtomDiv, AtomList, AtomListItem } from '../../element';

export const AtomDivStyle = styled(AtomDiv)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 60px;
  border-bottom: 1px solid black;
`;

export const AtomListStyle = styled(AtomList)`
  display: flex;
`;

export const AtomListItemStyle = styled(AtomListItem)`
  display: flex;
  textdecoration: none;
  padding: 0 10px 0 10px;
  textalign: center;
`;
