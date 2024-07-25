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
  &::-webkit-calendar-picker-indicator {
    display: none;
  }
  &::after {
    content: '';
    background-image: url('https://static.vecteezy.com/system/resources/thumbnails/003/738/383/small/appointment-date-icon-free-vector.jpg');
    background-size: contain; /* Ajusta el tamaño de la imagen */
    background-repeat: no-repeat;
    width: 18px;
    height: 18px;
  }
`;
export const AtomInputComponentStyled = styled(AtomInput).attrs({ type: 'text' })`
  font-family: 'Quicksand';
  background-color: #f3f1f1;
  border: none;
  box-sizing: border-box;
  padding: 6px;
  width: ${(props) => props.width};
  border-radius: 5px;
  &:focus {
    outline: none;
    border: none;
  }
`;
