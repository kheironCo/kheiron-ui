import styled from 'styled-components';
import { AtomDiv, AtomInput, Span } from '../../element';
import { LabelKUI } from '../base/LabelKUI';

export const AtomDivComponentStyled = styled(AtomDiv)`
  display: flex;
  flex-direction: column;
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

export const AtomDateComponentStyled = styled(AtomInput).attrs({ type: 'date' })`
  font-family: 'Quicksand';
  background-color: #f3f1f1;
  color: grey;
  border: none;
  box-sizing: border-box;
  padding: 7px 24px;
  width: ${(props) => props.width};
  border-radius: 5px;
  &:focus {
    outline: none;
    border: none;
  }
`;
