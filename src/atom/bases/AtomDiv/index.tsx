import React from 'react';

type AtomDivProps = React.HTMLAttributes<HTMLDivElement>;

const AtomDiv = ({ children, className, ...rest }: AtomDivProps) => (
  <div className={`KUI-atom-element-div ${className}`} {...rest}>
    {children}
  </div>
);

export default AtomDiv;
