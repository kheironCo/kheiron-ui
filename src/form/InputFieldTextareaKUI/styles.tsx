import styled from 'styled-components';
import { AtomTextArea, Span } from '../../element';

type AtomTextAreaProps = {
  width?: string;
};

export const AtomTextAreaComponentStyled = styled(AtomTextArea)<AtomTextAreaProps>`
  background-color: #f3f1f1;
  font-family: 'Quicksand', sans-serif;
  width: ${(props) => props.width};
  border: none;
  box-sizing: border-box;
  padding: 6px;
  border-radius: 5px;
  &:focus {
    outline: none;
    border: none;
  }
`;

export const SpanComponentStyled = styled(Span)`
  color: red;
  font-size: 14px;
  font-family: 'Blinker', sans-serif;
`;
