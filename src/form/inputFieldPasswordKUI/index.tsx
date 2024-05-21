import { PasswordInputKUI } from '@KUI-form';
import { AtomDiv } from '@KUI-element';
import { PasswordInputKUIProps } from 'form/PasswordInputKUI/types';
import { LabelKUI, LabelKUIProps } from '@KUI-form';

export type inputFieldPasswordKUIProps = LabelKUIProps & PasswordInputKUIProps;

export const inputFieldPasswordKUI = ({
  label,
  position = 'top',
  align = 'left',
  getValue,
}: inputFieldPasswordKUIProps) => {
  return (
    <AtomDiv className="KUI-inputfieldPassword-root">
      <LabelKUI
        position={position}
        align={align}
        label={label}
        className="KUI-inputfieldPassword-label"
      >
        <PasswordInputKUI label={label} getValue={getValue} />
      </LabelKUI>
    </AtomDiv>
  );
};
