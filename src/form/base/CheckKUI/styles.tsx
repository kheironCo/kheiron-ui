import styled from 'styled-components';
import { AtomDiv, AtomInput, AtomLabel } from '../../../element';

export const AtomDivComponentStyled = styled(AtomDiv)`
  display: flex;

  & input + label path {
    transition: 0.3s;
  }
`;

export const AtomInputComponentStyled = styled(AtomInput)`
  height: 0;
  width: 0;
  visibility: hidden;
`;

export const AtomLabelComponentStyled = styled(AtomLabel)`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  transition: 0.3s;

  :hover {
    background-color: #00000005;
    transition: 0.5s;
  }
`;
