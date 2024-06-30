import { forwardRef } from 'react';
import { LabelKUIProps, PasswordInputKUI } from '../base';
import { AtomDivComponentStyled, LabelKUIComponentStyled } from './styles';

export type InputFieldPasswordKUIProps = LabelKUIProps &
  Parameters<typeof PasswordInputKUI>[0] & {
    width?: string;
  };

export const InputFieldPasswordKUI = forwardRef<HTMLInputElement, InputFieldPasswordKUIProps>(
  ({ label, position = 'top', width, ...rest }, ref) => {
    return (
      <AtomDivComponentStyled className="KUI-input-field-password-root">
        <LabelKUIComponentStyled
          position={position}
          label={label}
          className="KUI-input-field-password-label"
        >
          <PasswordInputKUI width={width} {...rest} ref={ref} />
        </LabelKUIComponentStyled>
      </AtomDivComponentStyled>
    );
  },
);

InputFieldPasswordKUI.displayName = 'InputFieldPasswordKUI';
