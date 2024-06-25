import styled from 'styled-components';
import { AtomInput } from '../../../element';

export const AtomInputComponentStyled = styled(AtomInput)`
  background-color: #f3f1f1;
  width: ${(props) => props.width};
  border: none;
  padding: 6px;
  outline: none;
  border-radius: 5px;
  &:focus {
    outline: none;
    border: none;
  }
`;
