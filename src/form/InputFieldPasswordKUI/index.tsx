import { LabelKUI, LabelKUIProps, PasswordInputKUI } from '../base';
import { AtomDiv } from '../../element';

export type InputFieldPasswordKUIProps = LabelKUIProps & Parameters<typeof PasswordInputKUI>[0];

export const InputFieldPasswordKUI = ({
  label,
  position = 'top',
  align = 'left',
  getValue,
}: InputFieldPasswordKUIProps) => {
  return (
    <AtomDiv className="KUI-input-field-password-root">
      <LabelKUI
        position={position}
        align={align}
        label={label}
        className="KUI-input-field-password-label"
      >
        <PasswordInputKUI getValue={getValue} />
      </LabelKUI>
    </AtomDiv>
  );
};
