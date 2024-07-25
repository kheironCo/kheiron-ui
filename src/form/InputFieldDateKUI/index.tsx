import { forwardRef } from 'react';
import {
  AtomDateComponentStyled,
  AtomDivComponentStyled,
  LabelKUIComponentStyled,
  SpanComponentStyled,
} from './styles';
import { AtomInput } from 'element';

export type InputFieldDateKUIProps = Parameters<typeof AtomInput>[0] &
  Pick<Parameters<typeof LabelKUIComponentStyled>[0], 'label' | 'position'> & {
    errorMessage?: string;
  };

export const InputFieldDateKUI = forwardRef<HTMLInputElement, InputFieldDateKUIProps>(
  ({ label, position, errorMessage, ...rest }, ref) => {
    return (
      <AtomDivComponentStyled className="KUI-input-field-root">
        <LabelKUIComponentStyled className="KUI-input-field-label" {...{ label, position }}>
          <AtomDateComponentStyled className="KUI-input-field-input" {...rest} ref={ref} />
        </LabelKUIComponentStyled>
        <SpanComponentStyled>{errorMessage}</SpanComponentStyled>
      </AtomDivComponentStyled>
    );
  },
);

InputFieldDateKUI.displayName = 'InputFieldDateKUI';
