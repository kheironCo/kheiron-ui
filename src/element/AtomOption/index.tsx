import React from 'react';

export type AtomOptionProps = React.OptionHTMLAttributes<HTMLOptionElement>;

export interface AtomOptionElement extends React.JSX.Element {}

export const AtomOption = ({
  children,
  className,
  ...rest
}: AtomOptionProps): AtomOptionElement =>
  (
    <option className={`KUI-atom-element-option ${className || ''}`} {...rest}>
      {children}
    </option>
  ) as AtomOptionElement;
