import { AtomDiv, AtomInput } from '../../../element';
import styled from 'styled-components';

export const AtomDivComponentStyled = styled(AtomDiv)`
  display: flex;
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
