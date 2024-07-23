import { LabelKUI } from '../base';
import { AtomTextAreaComponentStyled, SpanComponentStyled } from './styles';

export type InputFieldTextAreaKUIProps = {
  label: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  htmlFor?: string;
  width?: string;
  errorMessage?: string;
};

export const InputFieldTextAreaKUI = ({
  label,
  position = 'top',
  htmlFor,
  width = '100%',
  errorMessage,
  ...rest
}: InputFieldTextAreaKUIProps) => {
  return (
    <>
      <LabelKUI
        label={label}
        position={position}
        htmlFor={htmlFor}
        className="KUI-input-field-textarea-root"
      >
        <AtomTextAreaComponentStyled
          width={width}
          {...rest}
          className="KUI-input-field-text-area"
        />
      </LabelKUI>
      <SpanComponentStyled>{errorMessage}</SpanComponentStyled>
    </>
  );
};
