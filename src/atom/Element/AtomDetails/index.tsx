import React from 'react';

export type AtomDetailsProps = React.DetailsHTMLAttributes<HTMLDetailsElement>;

export interface AtomDetailsElement extends React.JSX.Element {}

export const AtomDetails = ({
  children,
  className,
  ...rest
}: AtomDetailsProps) =>
  (
    <details
      className={`KUI-atom-element-details ${className || ''}`}
      {...rest}
    >
      {children}
    </details>
  ) as AtomDetailsElement;
