import { ButtonPalette, ButtonVariant } from './type';
import { ButtonStyle } from './styles';
import { ReactNode } from 'react';

export type ButtonKUIProps = Parameters<typeof ButtonStyle>[0] & {
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
    <ButtonStyle {...{ variant, palette }} className={`KUI-button ${className || ''}`} {...rest}>
      {label ?? children ?? ''}
    </ButtonStyle>
  );
};
