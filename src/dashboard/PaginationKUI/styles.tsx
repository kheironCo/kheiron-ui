import styled, { css } from 'styled-components';
import { AtomDiv } from '../../element';
import { ButtonKUI } from '../../form';

export const Root = styled(AtomDiv)`
  display: flex;
  flex-direction: row;
`;

interface IStyle {
  color?: string;
  bgcolor?: string;
  border?: string;
  borderColor?: string;
  borderWidth?: string;
  borderStyle?: string;
}

interface StyleType extends IStyle {
  hover?: IStyle;
}

const StyleResolver = ({ bgcolor, color }: IStyle) => {
  const BACKGROUND_COLOR = bgcolor && `background-color: ${bgcolor} !important;`;
  const COLOR = color && `color: ${color} !important;`;
  return `
    ${BACKGROUND_COLOR}
    ${COLOR}
  `;
};

export const ButtonStyled = styled(ButtonKUI)<StyleType>`
  width: 1.5rem !important;
  height: 1.5rem !important;
  padding: 0 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ hover, ...rest }) => {
    const COMPONENT = StyleResolver(rest);
    const HOVER = typeof hover === 'object' && StyleResolver(hover);

    return css`
      ${COMPONENT}
      &:hover {
        ${HOVER}
      }
    `;
  }};
`;
