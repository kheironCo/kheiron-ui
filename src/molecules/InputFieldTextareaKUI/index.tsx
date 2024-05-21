import { LabelKUI, LabelKUIProps } from 'molecules/LabelKUI';
import { AtomTextArea } from '@KUI-element';

export const InputFieldTextareaKUI = ({ label, ...rest }: LabelKUIProps) => {
  return (
    <>
      <LabelKUI label={label}>
        <AtomTextArea {...rest} />
      </LabelKUI>
    </>
  );
};
