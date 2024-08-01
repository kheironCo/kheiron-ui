import { ButtonStyled } from './styles';
import { ButtonPalette, ButtonVariant } from './type';

import { ReactNode } from 'react';

export type ButtonKUIProps = {
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
  return (
    <ButtonStyled variant={variant} palette={palette} className={`KUI-button ${className || ''}`} {...rest}>
      {label ?? children ?? ''}
    </ButtonStyled>
  );
};
