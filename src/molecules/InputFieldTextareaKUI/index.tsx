import { LabelKUI, LabelKUIProps } from 'molecules/LabelKUI';
import { AtomTextArea } from '@KUI-element';

export const InputFieldTextareaKUI = ({ label, ...rest }: LabelKUIProps) => {
  return (
    <>
      <LabelKUI label={label} className='KUI-input-field-textarea-root'>
        <AtomTextArea {...rest} className='KUI-input-field-text-area'/>
      </LabelKUI>
    </>
  );
};
