import styled from 'styled-components';
import { AtomDiv, AtomInput } from '../../element';
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

export const AtomInputComponentStyled = styled(AtomInput)`
  font-family: 'Quicksand';
  background-color: #f3f1f1;
  border: none;
  padding: 6px;
  width: ${(props) => props.width};
  border-radius: 5px;
  &:focus {
    outline: none;
    border: none;
  }
`;
// export const inputWidth = css`
//   width: 368px;
//   background-color: #f3f1f1;
//   border: none;
//   padding: 6px;
//   border-radius: 5px;
//   &:focus {
//     outline: none;
//     border: none;
//   }
// `;
