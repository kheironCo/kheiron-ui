import { PasswordInputKUIProps } from 'form/base/PasswordInputKUI/types';
import { LabelKUIProps, PasswordInputKUI } from '../base';
import {
  AtomDivComponentStyled,
  LabelKUIComponentStyled,
  PasswordInputComponentStyled,
} from './styles';

export type InputFieldPasswordKUIProps = LabelKUIProps &
  PasswordInputKUIProps &
  Parameters<typeof PasswordInputKUI>[0] & {
    width?: string;
  };

export const InputFieldPasswordKUI = ({
  label,
  position = 'top',
  align = 'left',
  getValue,
  width,
  ...rest
}: InputFieldPasswordKUIProps) => {
  return (
    <AtomDivComponentStyled className="KUI-input-field-password-root">
      <LabelKUIComponentStyled
        position={position}
        align={align}
        label={label}
        className="KUI-input-field-password-label"
      >
        <PasswordInputComponentStyled getValue={getValue} width={width} {...rest} />
      </LabelKUIComponentStyled>
    </AtomDivComponentStyled>
  );
};
