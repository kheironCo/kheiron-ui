import React from 'react';
import { HeadingStyle } from './styles';

type VariantType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type AtomHeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  variant?: VariantType;
  as?: VariantType;
};

export interface AtomHeadingElement extends React.JSX.Element {}

export const Heading = ({ variant = 'h3', as, children, className, ...rest }: AtomHeadingProps) => {
  const HeadingTag = as ?? variant;
  return (
    <HeadingTag
      css={HeadingStyle}
      className={`KUI-atom-element-heading-${variant} ${className || ''}`}
      {...rest}
    >
      {children}
    </HeadingTag>
  ) as AtomHeadingElement;
};
