import { CurrencyInputKUI, LabelKUIProps } from '../base';
import { LabelKUIComponentStyled } from './styles';

export type InputFieldCurrencyKUIProps = Parameters<typeof CurrencyInputKUI>[0] &
  Omit<LabelKUIProps, 'htmlFor' | 'children'>;

export const InputFieldCurrencyKUI = ({
  label,
  position,
  className,
  width,
  ...rest
}: InputFieldCurrencyKUIProps) => {
  return (
    <LabelKUIComponentStyled
      {...{ label, position }}
      className={`KUI-input-field-currency-root ${className}`}
    >
      <CurrencyInputKUI {...rest} className="KUI-input-field-currency" width={width} />
    </LabelKUIComponentStyled>
  );
};
