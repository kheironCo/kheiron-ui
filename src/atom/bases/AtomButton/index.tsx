import React from 'react';

type AtomButtonProps = React.HTMLAttributes<HTMLButtonElement>;

const AtomButton = ({ className, children, ...rest }: AtomButtonProps) => (
  <button className={`KUI-atom-element-button ${className}`} {...rest}>
    {children}
  </button>
);

export default AtomButton;
