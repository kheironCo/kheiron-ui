import styled, { css } from 'styled-components';
import { AtomDiv, AtomImage } from '../../element';
import { AvatarStyleProps, AvatarRootProps, AvatarProps } from './types';
function stringToColor(str: string): string {
  // Crea un hash a partir del string
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  // Convierte el hash a un valor hexadecimal
  let color = '#';
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    color += ('00' + value.toString(16)).slice(-2);
  }

  return color;
}
function getComplementaryColor(color: string): string {
  // Eliminamos el posible símbolo '#' del inicio del color
  const normalizedColor = color.replace(/^#/, '');

  // Convertimos el color hexadecimal a un número entero
  const intValue = parseInt(normalizedColor, 16);

  // Calculamos el color complementario invirtiendo todos los bits
  const complementaryValue = 0xffffff ^ intValue;

  // Convertimos el valor complementario de nuevo a formato hexadecimal
  const complementaryColor = '#' + complementaryValue.toString(16).padStart(6, '0');

  return complementaryColor;
}

const blinkerFont = css`
  @import url('https://fonts.googleapis.com/css2?family=Blinker&display=swap');
`;

// Estilos convertidos a styled-components
export const Avatar = styled(AtomImage)<AvatarProps>`
  width: 100%;
  height: 100%;
  src: ${({ src }) => src};
  alt: ${({ alt }) => alt};
`;
export const AvatarRoot = styled(AtomDiv)<AvatarRootProps>`
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : `9999px`)};
  width: ${({ size }) =>
    typeof size === 'object' && size.width ? size.width : typeof size === 'string' ? size : '48px'};
  height: ${({ size }) =>
    typeof size === 'object' && size.height
      ? size.height
      : typeof size === 'string'
        ? size
        : '48px'};
  overflow: hidden;
  border: ${({ altStyle }) => (altStyle && altStyle.border ? altStyle.border : ``)};
`;

export const AvatarAlt = styled(AtomDiv)<AvatarStyleProps>`
  ${blinkerFont};
  font-family: 'Blinker', sans-serif;
  display: flex;
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : `9999px`)};
  background-color: ${({ altText, altStyle }) =>
    altStyle ? altStyle.bgColor || stringToColor(altText) : stringToColor(altText)};
  color: ${({ altText, altStyle }) =>
    altStyle
      ? altStyle.color || getComplementaryColor(stringToColor(altText))
      : getComplementaryColor(stringToColor(altText))};
  font-size: 1.25rem;
  border: ${({ altText, altStyle }) =>
    altStyle && altStyle.border
      ? altStyle.border
      : `3px solid ${getComplementaryColor(stringToColor(altText))}`};
  font-weight: bold;
  justify-content: center;
  align-items: center;
  width: ${({ size }) =>
    typeof size === 'object' && size.width ? size.width : typeof size === 'string' ? size : '3rem'};
  height: ${({ size }) =>
    typeof size === 'object' && size.height
      ? size.height
      : typeof size === 'string'
        ? size
        : '3rem'};
  font-size: ${({ size }) =>
    typeof size === 'object' && size.width ? size.width : typeof size === 'string' ? size : '4rem'};
`;
