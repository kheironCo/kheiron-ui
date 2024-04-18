import React from 'react';

export type AtomSelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

export interface AtomSelectElement extends React.JSX.Element {}

export const AtomSelect = ({ children, className, ...rest }: AtomSelectProps) =>
  (
    <select className={`KUI-atom-element-select ${className || ''}`} {...rest}>
      {children}
    </select>
  ) as AtomSelectElement;
