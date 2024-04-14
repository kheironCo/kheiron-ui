import React from 'react';

type AtomInputProps = React.HTMLAttributes<HTMLInputElement>;

const AtomInput = ({ className, ...rest }: AtomInputProps) => (
  <input className={`KUI-atom-element-input ${className}`} {...rest} />
);

export default AtomInput;
