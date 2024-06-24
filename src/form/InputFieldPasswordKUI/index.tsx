import { LabelKUIProps, PasswordInputKUI } from '../base';
import {
  AtomDivComponentStyled,
  LabelKUIComponentStyled,
  PasswordInputComponentStyled,
} from './styles';

export type InputFieldPasswordKUIProps = LabelKUIProps &
  Parameters<typeof PasswordInputKUI>[0] & {
    width?: string;
  };

export const InputFieldPasswordKUI = ({
  label,
  position = 'top',
  align = 'left',
  getValue,
}: InputFieldPasswordKUIProps) => {
  return (
    <AtomDivComponentStyled className="KUI-input-field-password-root">
      <LabelKUIComponentStyled
        position={position}
        align={align}
        label={label}
        className="KUI-input-field-password-label"
      >
        <PasswordInputComponentStyled getValue={getValue} width="400px" />
      </LabelKUIComponentStyled>
    </AtomDivComponentStyled>
  );
};
