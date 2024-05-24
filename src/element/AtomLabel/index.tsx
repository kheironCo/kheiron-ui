import React from 'react';

type AtomLabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export interface AtomLabelElement extends React.JSX.Element {}

export const AtomLabel = ({ children, className, ...rest }: AtomLabelProps) =>
  (
    <label className={`KUI-atom-element-label ${className || ''}`} {...rest}>
      {children}
    </label>
  ) as AtomLabelElement;
