import React from 'react';

interface AtomAnchorProps{
  children?: string;
  className?: string;
  target?: string;
  href?: string
}
export interface AtomAnchor extends React.JSX.Element {}
export const AtomAnchor = ({ children, className, target, href , ...rest }: AtomAnchorProps) =>
  (
    <a className={`KUI-atom-Item-ul ${className || ''}`} {...rest} target={target} href={href}>
      {children}
    </a>
  ) as AtomAnchor;
