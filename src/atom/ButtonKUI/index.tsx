import { css } from '@emotion/react';
import { AtomButton } from '../../element';
import { ButtonPalette, ButtonVariant } from './type';
import { ButtonList, GeneralButtonStyle } from './styles';

export type ButtonKUIProps = {
  className?: string;
  variant?: ButtonVariant;
  palette?: ButtonPalette;
  children: string;
};

export const ButtonKUI = ({
  className,
  children,
  variant = 'filled',
  palette = 'primary',
  ...rest
}: ButtonKUIProps) => {
  const ButtonPalleteStyle =
    ButtonList[(palette as ButtonPalette) || 'primary'];
  const ButtonStyle =
    ButtonPalleteStyle[(variant as ButtonVariant) || 'filled'];
  return (
    <AtomButton
      css={css(GeneralButtonStyle, ButtonStyle)}
      className={`KUI-button ${className || ''}`}
      {...rest}
    >
      {children}
    </AtomButton>
  );
};
