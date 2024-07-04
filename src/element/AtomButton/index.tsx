import React from 'react';

interface AtomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

interface AtomButtonJSXElement extends React.JSX.Element {}

export const AtomButton = ({ className, children, ...rest }: AtomButtonProps) =>
  (
    <button className={`KUI-element-button ${className || ''}`} {...rest}>
      {children}
    </button>
  ) as AtomButtonJSXElement;
