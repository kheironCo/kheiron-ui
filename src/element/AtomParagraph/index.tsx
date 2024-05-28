import React from 'react';
import { ParagraphStyle } from './styles';

type AtomParagraphProps = React.HTMLAttributes<HTMLParagraphElement>;

export interface AtomPargraphElement extends React.JSX.Element {}

export const AtomParagraph = ({ children, className, ...rest }: AtomParagraphProps) =>
  (
    <p css={ParagraphStyle} className={`KUI-atom-element-paragraph ${className || ''}`} {...rest}>
      {children}
    </p>
  ) as AtomPargraphElement;
