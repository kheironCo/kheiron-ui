import { AtomInputProps } from 'element';
import { AtomInputComponentStyled } from './styles';
import { useState } from 'react';

export type CurrencyInputKUIProps = Parameters<typeof AtomInputComponentStyled>[0] & {
  readonly value?: number;
  width?: string;
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
  width,
  value,
  onChange,
  className,
  ...rest
}: CurrencyInputKUIProps) => {
  const [_value, _setValue] = useState<string>(value ? NumberToCurrency(value) : '0,00');
  const _onChange: AtomInputProps['onChange'] = (e) => {
    const _valueNumber = CurrencyToNumber(e.target.value);
    const _valueCurrency = NumberToCurrency(_valueNumber);
    _setValue(_valueCurrency);
    if (onChange) onChange({ ...e, target: { ...e.target, value: _valueCurrency } });
  };
  return (
    <AtomInputComponentStyled
      width={width}
      {...rest}
      className={`KUI-currency-input ${className}`}
      value={_value}
      onChange={_onChange}
    />
  );
};
