import React from 'react';
import { HeadingStyle, HeadingStyleProps } from './styles';

type VariantType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type AtomHeadingProps = React.HTMLAttributes<HTMLHeadingElement> &
  HeadingStyleProps & {
    variant?: VariantType;
    as?: VariantType;
  };

export interface AtomHeadingElement extends React.JSX.Element {}

export const Heading = ({
  variant = 'h3',
  as,
  children,
  className,
  weight,
  ...rest
}: AtomHeadingProps) => {

  return (
    <HeadingStyle
      weight={weight}
      className={`KUI-atom-element-heading-${variant} ${className || ''}`}
      {...rest}
    >
      {children}
    </HeadingStyle>
  ) as AtomHeadingElement;
};
