import { ButtonStyled } from './styles';
import { ButtonPalette, ButtonVariant } from './type';

import { ReactNode } from 'react';

export type ButtonKUIProps = Parameters<typeof ButtonStyled>[0] & {
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
  disabled = false,
  ...rest
}: ButtonKUIProps) => {
  return (
    <ButtonStyled
      variant={variant}
      palette={palette}
      className={`KUI-button ${className || ''}`}
      disabled={disabled}
      {...rest}
    >
      {label ?? children ?? ''}
    </ButtonStyled>
  );
};
