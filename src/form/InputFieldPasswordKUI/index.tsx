import { forwardRef } from 'react';
import { LabelKUIProps, PasswordInputKUI } from '../base';
import { AtomDivComponentStyled, LabelKUIComponentStyled, SpanComponentStyled } from './styles';

export type InputFieldPasswordKUIProps = LabelKUIProps &
  Parameters<typeof PasswordInputKUI>[0] & {
    width?: string;
    errorMessage?: string;
  };

export const InputFieldPasswordKUI = forwardRef<HTMLInputElement, InputFieldPasswordKUIProps>(
  ({ label, errorMessage, position = 'top', width, ...rest }, ref) => {
    return (
      <AtomDivComponentStyled className="KUI-input-field-password-root">
        <LabelKUIComponentStyled
          position={position}
          label={label}
          className="KUI-input-field-password-label"
        >
          <PasswordInputKUI width={width} {...rest} ref={ref} />
        </LabelKUIComponentStyled>
        <SpanComponentStyled>{errorMessage}</SpanComponentStyled>
      </AtomDivComponentStyled>
    );
  },
);

InputFieldPasswordKUI.displayName = 'InputFieldPasswordKUI';
