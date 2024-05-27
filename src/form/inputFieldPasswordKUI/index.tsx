import { LabelKUI, LabelKUIProps, PasswordInputKUI } from '../base';
import { PasswordInputKUIProps } from '../base/PasswordInputKUI/types';
import { AtomDiv } from '../../element';

export type InputFieldPasswordKUIProps = LabelKUIProps & PasswordInputKUIProps;

export const InputFieldPasswordKUI = ({
  label,
  position = 'top',
  align = 'left',
  getValue,
}: InputFieldPasswordKUIProps) => {
  return (
    <AtomDiv className="KUI-inputfieldPassword-root">
      <LabelKUI
        position={position}
        align={align}
        label={label}
        className="KUI-inputfieldPassword-label"
      >
        <PasswordInputKUI getValue={getValue} />
      </LabelKUI>
    </AtomDiv>
  );
};
