import { LabelKUI, LabelKUIProps, PasswordInputKUI } from '../base';
import { AtomDivComponentStyled, PasswordInputComponentStyled } from './styles';

export type InputFieldPasswordKUIProps = LabelKUIProps & Parameters<typeof PasswordInputKUI>[0];

export const InputFieldPasswordKUI = ({
  label,
  position = 'top',
  align = 'left',
  getValue,
}: InputFieldPasswordKUIProps) => {
  return (
    <AtomDivComponentStyled className="KUI-input-field-password-root">
      <LabelKUI
        position={position}
        align={align}
        label={label}
        className="KUI-input-field-password-label"
      >
        <PasswordInputComponentStyled getValue={getValue} />
      </LabelKUI>
    </AtomDivComponentStyled>
  );
};
