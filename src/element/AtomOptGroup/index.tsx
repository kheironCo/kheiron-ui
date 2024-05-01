import React from 'react';
import { AtomOptionElement } from '../AtomOption';

export type AtomOptGroupProps = React.OptgroupHTMLAttributes<HTMLOptGroupElement> & {
  label?: string;
  children: AtomOptionElement | AtomOptionElement[];
};

export interface AtomOptGroupElement extends React.JSX.Element {}

export const AtomOptGroup = ({ children, className, label, ...rest }: AtomOptGroupProps) =>
  (
    <optgroup label={label} className={`KUI-atom-element-selector ${className || ''}`} {...rest}>
      {children}
    </optgroup>
  ) as AtomOptGroupElement;
