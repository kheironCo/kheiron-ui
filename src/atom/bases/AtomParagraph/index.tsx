import React from 'react';

type AtomParagraphProps = React.HTMLAttributes<HTMLParagraphElement>;

const AtomParagraph = ({
  children,
  className,
  ...rest
}: AtomParagraphProps) => (
  <p className={`KUI-atom-element-paragraph ${className}`} {...rest}>
    {children}
  </p>
);

export default AtomParagraph;
