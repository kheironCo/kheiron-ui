import styled from 'styled-components';
import { AtomDiv, Span } from '../../element';
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
`;
