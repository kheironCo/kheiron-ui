import React from 'react';

export type AtomItemProps = React.LiHTMLAttributes<HTMLLIElement>;

export interface AtomItemElement extends React.JSX.Element {}

export const AtomItem = ({ children, className, ...rest }: AtomItemProps) =>
  (
    <li className={`KUI-atom-element-item ${className || ''}`} {...rest}>
      {children}
    </li>
  ) as AtomItemElement;
