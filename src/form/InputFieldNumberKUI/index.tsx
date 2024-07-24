import { forwardRef } from 'react';
import {
  AtomDivComponentStyled,
  SpanComponentStyled,
  AtomInputComponentStyled,
  LabelKUIComponentStyled,
} from './styles';

export type InputFieldNumberKUI = Parameters<typeof AtomInputComponentStyled>[0] &
  Pick<Parameters<typeof LabelKUIComponentStyled>[0], 'label' | 'position'> & {
    errorMessage?: string;
  };

export const InputFieldNumberKUI = forwardRef<HTMLInputElement, InputFieldNumberKUI>(
  ({ label, position, errorMessage, ...rest }, ref) => {
    return (
      <AtomDivComponentStyled className="KUI-input-field-root">
        <LabelKUIComponentStyled className="KUI-input-field-label" {...{ label, position }}>
          <AtomInputComponentStyled
            type="number"
            className="KUI-input-field-input"
            {...rest}
            ref={ref}
          />
        </LabelKUIComponentStyled>
        <SpanComponentStyled>{errorMessage}</SpanComponentStyled>
      </AtomDivComponentStyled>
    );
  },
);

InputFieldNumberKUI.displayName = 'InputFieldNumberKUI';
