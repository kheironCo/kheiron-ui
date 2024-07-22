import { forwardRef } from 'react';
import { CurrencyInputKUI, LabelKUIProps } from '../base';
import { LabelKUIComponentStyled, SpanComponentStyled } from './styles';

export type InputFieldCurrencyKUIProps = Parameters<typeof CurrencyInputKUI>[0] &
  Omit<LabelKUIProps, 'htmlFor' | 'children'> & {
    errorMessage?: string;
  };

export const InputFieldCurrencyKUI = forwardRef<HTMLInputElement, InputFieldCurrencyKUIProps>(
  ({ label, position, className, width, errorMessage, ...rest }, ref) => {
    return (
      <LabelKUIComponentStyled
        {...{ label, position }}
        className={`KUI-input-field-currency-root ${className}`}
      >
        <>
          <CurrencyInputKUI
            className="KUI-input-field-currency"
            width={width}
            {...rest}
            ref={ref}
          />
          <br />
          <SpanComponentStyled>{errorMessage}</SpanComponentStyled>
        </>
      </LabelKUIComponentStyled>
    );
  },
);

InputFieldCurrencyKUI.displayName = 'InputFieldCurrencyKUI';
