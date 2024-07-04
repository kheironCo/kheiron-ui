import { css } from '@emotion/react';
import { AtomDiv } from '../../element';
import { ButtonPalette, ButtonVariant } from './type';
import { ButtonList, GeneralButtonStyle } from './styles';
import { ReactNode } from 'react';

export type ButtonKUIProps = Parameters<typeof AtomDiv>[0] & {
  className?: string;
  variant?: ButtonVariant;
  palette?: ButtonPalette;
  children?: ReactNode;
  label?: string;
};

export const ButtonKUI = ({
  className,
  children,
  label,
  variant = 'filled',
  palette = 'primary',
  ...rest
}: ButtonKUIProps) => {
  const ButtonPalleteStyle = ButtonList[(palette as ButtonPalette) || 'primary'];
  const ButtonStyle = ButtonPalleteStyle[(variant as ButtonVariant) || 'filled'];
  return (
    <AtomDiv
      css={css(GeneralButtonStyle, ButtonStyle)}
      className={`KUI-button ${className || ''}`}
      {...rest}
    >
      {label ?? children ?? ''}
    </AtomDiv>
  );
};
