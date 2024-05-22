import { PasswordInputKUI } from '../../atom/PasswordInputKUI';
import { PasswordInputKUIProps } from '../../atom/PasswordInputKUI/types';
import { AtomDiv } from '../../element';
import { LabelKUI, LabelKUIProps } from '../LabelKUI';

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
        <PasswordInputKUI getValue={getValue} />
      </LabelKUI>
    </AtomDiv>
  );
};
