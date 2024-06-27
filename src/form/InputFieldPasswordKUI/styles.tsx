import styled from 'styled-components';
import { AtomDiv } from '../../element';
import { LabelKUI } from '../base/LabelKUI';
import { PasswordInputKUI } from '../base/PasswordInputKUI';

export const AtomDivComponentStyled = styled(AtomDiv)`
  display: flex;
  flexdirection: column;
`;

export const LabelKUIComponentStyled = styled(LabelKUI)`
  color: #64467a;
  font-family: 'Quicksand', sans-serif;
  margin: 5px;
`;

export const PasswordInputComponentStyled = styled(PasswordInputKUI)`
  background-color: #f3f1f1;
  border: none;
  width: ${(props) => props.width};
  padding: 6px;
  border-radius: 5px;
  &:focus {
    outline: none;
    border: none;
  }
`;
