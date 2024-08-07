import { forwardRef } from 'react';
import {
  AtomDivComponentStyled,
  AtomInputComponentStyled,
  LabelKUIComponentStyled,
  SpanComponentStyled,
} from './styles';

export type InputFieldTextKUIProps = Parameters<typeof AtomInputComponentStyled>[0] &
  Pick<Parameters<typeof LabelKUIComponentStyled>[0], 'label' | 'position'> & {
    errorMessage?: string;
  };

export const InputFieldTextKUI = forwardRef<HTMLInputElement, InputFieldTextKUIProps>(
  ({ label, position, errorMessage, ...rest }, ref) => {
    return (
      <AtomDivComponentStyled className="KUI-input-field-root">
        <LabelKUIComponentStyled className="KUI-input-field-label" {...{ label, position }}>
          <AtomInputComponentStyled className="KUI-input-field-input" {...rest} ref={ref} />
        </LabelKUIComponentStyled>
        <SpanComponentStyled>{errorMessage}</SpanComponentStyled>
      </AtomDivComponentStyled>
    );
  },
);

InputFieldTextKUI.displayName = 'InputFieldTextKUI';
