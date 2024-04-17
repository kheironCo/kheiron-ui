import React from 'react';

type AtomSummaryProps = React.HTMLAttributes<HTMLElement>;

export interface AtomSummaryElement extends React.JSX.Element {}

export const AtomSummary = ({
  className,
  children,
  ...rest
}: AtomSummaryProps) =>
  (
    <summary
      className={`KUI-atom-element-summary ${className || ''}`}
      {...rest}
    >
      {children}
    </summary>
  ) as AtomSummaryElement;
