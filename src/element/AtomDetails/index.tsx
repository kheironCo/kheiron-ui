import React from 'react';

export type AtomDetailsProps = React.DetailsHTMLAttributes<HTMLDetailsElement>;

export interface DetailsJSXElement extends React.JSX.Element {}

export const AtomDetails = ({ children, className, ...rest }: AtomDetailsProps) =>
  (
    <details className={`KUI-element-details ${className || ''}`} {...rest}>
      {children}
    </details>
  ) as DetailsJSXElement;
