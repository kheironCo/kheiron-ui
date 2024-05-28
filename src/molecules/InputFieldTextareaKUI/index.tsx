import { LabelKUI, LabelKUIProps } from 'molecules/LabelKUI';
import { AtomTextArea, AtomTextAreaProps } from '@KUI-element';

export type InputFieldTextareaKUIProps = LabelKUIProps & AtomTextAreaProps;

export const InputFieldTextareaKUI = ({ label, position, align, htmlFor, ...rest }: InputFieldTextareaKUIProps) => {
  return (
    <>
      <LabelKUI label={label} position={position} align={align} htmlFor={htmlFor} className="KUI-input-field-textarea-root">
        <AtomTextArea {...rest} className="KUI-input-field-text-area" />
      </LabelKUI>
    </>
  );
};
