import { LabelKUI, LabelKUIProps, PasswordInputKUI } from '../base';
import { AtomDiv } from '../../element';
import { divStyles, input, labelParentDiv } from './styles';

export type InputFieldPasswordKUIProps = LabelKUIProps & Parameters<typeof PasswordInputKUI>[0];

export const InputFieldPasswordKUI = ({
  label,
  position = 'top',
  align = 'left',
  getValue,
}: InputFieldPasswordKUIProps) => {
  return (
    <AtomDiv className="KUI-input-field-password-root" css={divStyles}>
      <LabelKUI
        position={position}
        align={align}
        label={label}
        className="KUI-input-field-password-label"
        css={labelParentDiv}
      >
        <PasswordInputKUI getValue={getValue} css={input} />
      </LabelKUI>
    </AtomDiv>
  );
};
