import { LabelKUI } from '../base';
import {
  AtomTextAreaComponentStyled,
  LabelKUIComponentStyled,
  SpanComponentStyled,
} from './styles';
import { forwardRef } from 'react';

export type InputFieldTextAreaKUIProps = Parameters<typeof AtomTextAreaComponentStyled>[0] &
  Pick<Parameters<typeof LabelKUI>[0], 'label' | 'position'> & {
    label?: string;
    position?: 'top' | 'bottom' | 'left' | 'right';
    htmlFor?: string;
    width?: string;
    errorMessage?: string;
  };

export const InputFieldTextAreaKUI = forwardRef<HTMLTextAreaElement, InputFieldTextAreaKUIProps>(
  ({ label, position = 'top', htmlFor, width, errorMessage, ...rest }, ref) => {
    return (
      <>
        <LabelKUIComponentStyled
          label={label}
          position={position}
          htmlFor={htmlFor}
          className="KUI-input-field-textarea-root"
        >
          <AtomTextAreaComponentStyled
            width={width}
            {...rest}
            className="KUI-input-field-text-area"
            ref={ref}
          />
        </LabelKUIComponentStyled>
        <SpanComponentStyled>{errorMessage}</SpanComponentStyled>
      </>
    );
  },
);

InputFieldTextAreaKUI.displayName = 'InputFieldTextAreaKUI';
