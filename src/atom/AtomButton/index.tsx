import React from 'react';

export type AtomButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export interface AtomButtonElement extends React.JSX.Element {}

export const AtomButton = ({ className, children, ...rest }: AtomButtonProps) =>
  (
    <button className={`KUI-atom-element-button ${className || ''}`} {...rest}>
      {children}
    </button>
  ) as AtomButtonElement;
