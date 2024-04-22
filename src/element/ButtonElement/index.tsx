import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

interface ButtonElement extends React.JSX.Element {}

export const Button = ({ className, children, ...rest }: ButtonProps) =>
  (
    <button className={`KUI-element-button ${className || ''}`} {...rest}>
      {children}
    </button>
  ) as ButtonElement;
