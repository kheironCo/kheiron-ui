import { AtomInput, AtomInputProps } from '../../../element';
import { useState } from 'react';

export type CurrencyInputKUIProps = Omit<AtomInputProps, 'onChange'> & {
  readonly value?: number;
  getValue?: (e: number) => void;
};

const CurrencyToNumber = (value: string) => {
  return Number(value.replace(/\D/g, '').replace(/^0+/, '')) / 100;
};
const NumberToCurrency = (value: number) => {
  const cleanNumber = Math.trunc(value * 100)
    .toString()
    .replace(/\D/g, '')
    .replace(/^0+/, '');

  if (value >= 1) {
    const decimals = cleanNumber.slice(-2);
    const integers = cleanNumber.slice(0, -2).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return `${integers},${decimals}`;
  }

  return `0,${'0'.repeat(2 - cleanNumber.length)}${cleanNumber}`;
};

export const CurrencyInputKUI = ({
  value,
  className,
  getValue,
  ...rest
}: CurrencyInputKUIProps) => {
  const [_value, _setValue] = useState<string>(value ? NumberToCurrency(value) : '0,00');
  const _onChange: AtomInputProps['onChange'] = (e) => {
    const _valueNumber = CurrencyToNumber(e.target.value);
    const _valueCurrency = NumberToCurrency(_valueNumber);
    _setValue(_valueCurrency);
    if (getValue) getValue(_valueNumber);
  };
  return (
    <AtomInput
      {...rest}
      className={`KUI-currency-input ${className}`}
      value={_value}
      onChange={_onChange}
    />
  );
};
