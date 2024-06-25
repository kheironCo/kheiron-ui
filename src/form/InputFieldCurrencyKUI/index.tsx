import { CurrencyInputKUI, CurrencyInputKUIProps, LabelKUIProps } from '../base';
import { LabelKUIComponentStyled } from './styles';

export type InputFieldCurrencyKUIProps = CurrencyInputKUIProps &
  Omit<LabelKUIProps, 'htmlFor' | 'children'>;

export const InputFieldCurrencyKUI = ({
  label,
  position,
  align,
  className,
  width,
  ...rest
}: InputFieldCurrencyKUIProps) => {
  return (
    <LabelKUIComponentStyled
      {...{ label, position, align }}
      className={`KUI-input-field-currency-root ${className}`}
    >
      <CurrencyInputKUI {...rest} className="KUI-input-field-currency" width={width} />
    </LabelKUIComponentStyled>
  );
};
