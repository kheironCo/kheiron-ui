import styled from 'styled-components';
import { AtomDiv, AtomInput, Span } from '../../element';
import { LabelKUI } from '../base/LabelKUI';

export const AtomDivComponentStyled = styled(AtomDiv)`
  display: flex;
  flexdirection: column;
`;

export const LabelKUIComponentStyled = styled(LabelKUI)`
  font-family: 'Blinker';
  color: #64467a;
  margin: 5px;
`;
export const SpanComponentStyled = styled(Span)`
  color: red;
  font-size: 14px;
  font-family: 'Blinker', sans-serif;
`;

export const AtomInputComponentStyled = styled(AtomInput)`
  background-color: #f3f1f1;
  width: ${(props) => props.width};
  font-family: 'Quicksand';
  border: none;
  padding: 6px;
  border-radius: 5px;
  &:focus {
    outline: none;
    border: none;
  }
`;
