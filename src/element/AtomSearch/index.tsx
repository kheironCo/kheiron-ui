import React from 'react';

export type AtomSearchProps = React.HTMLAttributes<HTMLInputElement>;

export interface AtomSearchElement extends React.JSX.Element {}

export const AtomSearch = ({ children, className, ...rest }: AtomSearchProps) =>
  (
    <search className={`KUI-atom-element-ul ${className || ''}`} {...rest}>
      {children}
    </search>
  ) as AtomSearchElement;
