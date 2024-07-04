import styled, { css } from 'styled-components';
import { AtomDiv } from '../../element/AtomDiv/index';

const generalStyle = css`
  font-size: 12px;
  padding: 5px 20px;
  border-radius: 12px;
  color: white;
  text-align: center;
  width: fit-content;
`;

export const DivStyled = styled(AtomDiv)<{
  bgcolor?: string;
  color?: string;
  borderStyle?: string;
  borderColor?: string;
  borderWidth?: string;
}>`
  ${generalStyle}
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.color};
  border-style: ${(props) => props.borderStyle};
  border-color: ${(props) => props.borderColor};
  border-width: ${(props) => props.borderWidth};
`;
