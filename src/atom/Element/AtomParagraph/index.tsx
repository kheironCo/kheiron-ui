import React from 'react';

type AtomParagraphProps = React.HTMLAttributes<HTMLParagraphElement>;

export interface AtomPargraphElement extends React.JSX.Element {}

export const AtomParagraph = ({
  children,
  className,
  ...rest
}: AtomParagraphProps) =>
  (
    <p className={`KUI-atom-element-paragraph ${className || ''}`} {...rest}>
      {children}
    </p>
  ) as AtomPargraphElement;
