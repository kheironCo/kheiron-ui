import { css } from '@emotion/react';
import { AtomButton, AtomButtonProps } from '../../element';
import { ButtonPalette, ButtonVariant } from './type';
import { ButtonList, GeneralButtonStyle } from './styles';
import { ReactNode } from 'react';

export type ButtonKUIProps = AtomButtonProps & {
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
  const ButtonPaletteStyle = ButtonList[(palette as ButtonPalette) || 'primary'];
  const ButtonStyle = ButtonPaletteStyle[(variant as ButtonVariant) || 'filled'];
  return (
    <AtomButton
      css={css(GeneralButtonStyle, ButtonStyle)}
      className={`KUI-button ${className || ''}`}
      {...rest}
    >
      {label ?? children ?? ''}
    </AtomButton>
  );
};
