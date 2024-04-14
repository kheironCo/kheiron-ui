import React from 'react';

type AtomLabelProps = React.HTMLAttributes<HTMLLabelElement>;

const AtomLabel = ({ children, className, ...rest }: AtomLabelProps) => (
  <label className={`KUI-atom-element-label ${className}`} {...rest}>
    {children}
  </label>
);

export default AtomLabel;
