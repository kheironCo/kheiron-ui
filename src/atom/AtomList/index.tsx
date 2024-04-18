import React from 'react';

export type AtomListProps = React.HTMLAttributes<HTMLUListElement>;

export interface AtomListElement extends React.JSX.Element {}

export const AtomList = ({ children, className, ...rest }: AtomListProps) =>
  (
    <ul className={`KUI-atom-element-ul ${className || ''}`} {...rest}>
      {children}
    </ul>
  ) as AtomListElement;
