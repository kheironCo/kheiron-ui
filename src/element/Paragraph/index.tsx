import React from 'react';
import { ParagraphStyle } from './styles';

type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement>;

export interface ParagraphElement extends React.JSX.Element {}

export const Paragraph = ({ children, className, ...rest }: ParagraphProps) =>
  (
    <ParagraphStyle className={`KUI-atom-element-paragraph ${className || ''}`} {...rest}>
      {children}
    </ParagraphStyle>
  ) as ParagraphElement;
