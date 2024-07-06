import { AtomButtonProps } from '../../element';
import { ButtonPalette, ButtonVariant } from './type';
import { ButtonStyled } from './styles';
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
  return (
    <ButtonStyled {...{ variant, palette }} className={`KUI-button ${className || ''}`} {...rest}>
      {label ?? children ?? ''}
    </ButtonStyled>
  );
};
