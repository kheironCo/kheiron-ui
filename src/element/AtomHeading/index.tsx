import React from 'react';

type VariantType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type AtomHeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  variant: VariantType;
};

export interface AtomHeadingElement extends React.JSX.Element {}

export const AtomHeading = ({ variant, children, className, ...rest }: AtomHeadingProps) => {
  const HeadingTag = variant;
  return (
    <HeadingTag className={`KUI-atom-element-heading-${variant} ${className || ''}`} {...rest}>
      {children}
    </HeadingTag>
  ) as AtomHeadingElement;
};
