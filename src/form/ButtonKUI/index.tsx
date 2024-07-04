import { css } from '@emotion/react';
import { AtomButton } from '../../element';
import { ButtonPalette, ButtonVariant } from './type';
import { ButtonList, GeneralButtonStyle } from './styles';
import { ReactNode } from 'react';

export type ButtonKUIProps = Parameters<typeof AtomButton>[0] & {
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
  const ButtonPaletetStyle = ButtonList[(palette as ButtonPalette) || 'primary'];
  const ButtonStyle = ButtonPaletetStyle[(variant as ButtonVariant) || 'filled'];
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
