import React from 'react';

type AtomMeterProps = React.MeterHTMLAttributes<HTMLMeterElement> & {
  min: number;
  max: number;
  low?: number;
  high?: number;
  optimum?: number;
  value: number;
};

export interface AtomMeterElement extends React.JSX.Element {}

export const AtomMeter = ({ className, ...rest }: AtomMeterProps) =>
  (
    <meter className={`KUI-atom-element-meter ${className || ''}`} {...rest} />
  ) as AtomMeterElement;
