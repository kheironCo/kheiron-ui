import { LabelKUI } from '../base';
import { AtomTextArea } from '../../element';

export type InputFieldTextareaKUIProps = Parameters<typeof LabelKUI>[0] &
  Parameters<typeof AtomTextArea>[0];

export const InputFieldTextareaKUI = ({
  label,
  position,
  htmlFor,
  ...rest
}: InputFieldTextareaKUIProps) => {
  return (
    <LabelKUI
      label={label}
      position={position}
      htmlFor={htmlFor}
      className="KUI-input-field-textarea-root"
    >
      <AtomTextArea {...rest} className="KUI-input-field-text-area" />
    </LabelKUI>
  );
};
