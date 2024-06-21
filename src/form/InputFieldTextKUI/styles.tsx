import styled from 'styled-components';
import { AtomDiv, AtomInput } from '../../element';
import { LabelKUI } from '../base/LabelKUI';

export const AtomDivComponentStyled = styled(AtomDiv)`
  display: flex;
  flexdirection: column;
`;

export const LabelKUIComponentStyled = styled(LabelKUI)`
  color: #64467a;
  margin: 5px;
`;

export const AtomInputComponentStyled = styled(AtomInput)`
  background-color: #f3f1f1;
  border: none;
  padding: 6px;
  border-radius: 5px;
  &:focus {
    outline: none;
    border: none;
  }
`;
