import React from 'react';

export type AtomSpanProps = React.HTMLAttributes<HTMLSpanElement>;

export interface AtomSpanElement extends React.JSX.Element {}

export const AtomSpan = ({ children, className, ...rest }: AtomSpanProps) =>
  (
    <span className={`KUI-atom-element-span ${className || ''}`} {...rest}>
      {children}
    </span>
  ) as AtomSpanElement;
