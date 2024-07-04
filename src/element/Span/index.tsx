import React from 'react';

export type SpanProps = React.HTMLAttributes<HTMLDivElement>;

export interface SpanElement extends React.JSX.Element {}

export const Span = ({ children, className, ...rest }: SpanProps) =>
  (
    <span className={`KUI-atom-element-div ${className || ''}`} {...rest}>
      {children}
    </span>
  ) as SpanElement;
