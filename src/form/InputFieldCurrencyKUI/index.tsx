import { CurrencyInputKUI, CurrencyInputKUIProps } from 'form/base';
import { LabelKUI, LabelKUIProps } from '@KUI-form';

export type InputFieldCurrencyKUIProps = CurrencyInputKUIProps &
  Omit<LabelKUIProps, 'htmlFor' | 'children'>;

export const InputFieldCurrencyKUI = ({
  label,
  position,
  align,
  className,
  ...rest
}: InputFieldCurrencyKUIProps) => {
  return (
    <LabelKUI
      {...{ label, position, align }}
      className={`KUI-input-field-currency-root ${className}`}
    >
      <CurrencyInputKUI {...rest} className="KUI-input-field-currency" />
    </LabelKUI>
  );
};
