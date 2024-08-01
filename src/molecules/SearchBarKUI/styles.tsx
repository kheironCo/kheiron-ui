import styled from 'styled-components';
import { AtomButton, AtomInput } from '../../element';

export const ButtonStyled = styled(AtomButton)`
  background-color: #10b2cc;
  color: white;
  border: none;
  padding: 6px 8px;
  margin-right: 3px;
  border-radius: 5px;
  cursor: pointer;
`;
export const InputStyled = styled(AtomInput)`
  outline: none;
  border: none;
  border-bottom: 2px solid #0c8ca0;
  padding: 3px 6px;
`;
