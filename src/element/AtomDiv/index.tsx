import React from 'react';

type AtomDivProps = React.HTMLAttributes<HTMLDivElement>;

export interface AtomDivElement extends React.JSX.Element {}

export const AtomDiv = ({ children, className, ...rest }: AtomDivProps) =>
  (
    <div className={`KUI-atom-element-div ${className || ''}`} {...rest}>
      {children}
    </div>
  ) as AtomDivElement;
