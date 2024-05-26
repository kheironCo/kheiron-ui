import { PasswordInputKUI } from '@KUI-form';
import { AtomDiv } from '@KUI-element';
import { PasswordInputKUIProps } from 'form/base/PasswordInputKUI/types';
import { LabelKUI, LabelKUIProps } from '@KUI-form';

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
