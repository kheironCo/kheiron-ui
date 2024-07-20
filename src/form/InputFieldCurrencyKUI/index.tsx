import { CurrencyInputKUI, LabelKUIProps } from '../base';
import { LabelKUIComponentStyled, SpanComponentStyled } from './styles';

export type InputFieldCurrencyKUIProps = Parameters<typeof CurrencyInputKUI>[0] &
  Omit<LabelKUIProps, 'htmlFor' | 'children'> & {
    errorMessage?: string;
  };

export const InputFieldCurrencyKUI = ({
  label,
  position,
  className,
  width,
  errorMessage,
  ...rest
}: InputFieldCurrencyKUIProps) => {
  return (
    <LabelKUIComponentStyled
      {...{ label, position }}
      className={`KUI-input-field-currency-root ${className}`}
    >
      <>
        <CurrencyInputKUI {...rest} className="KUI-input-field-currency" width={width} />
        <br />
        <SpanComponentStyled>{errorMessage}</SpanComponentStyled>
      </>
    </LabelKUIComponentStyled>
  );
};
