import React from 'react';

interface AtomListItemProps{
  children?:  React.JSX.Element | string;
  className?: string;
}
export interface AtomListItemElement extends React.JSX.Element {}
export const AtomListItem = ({ children, className, ...rest }: AtomListItemProps) =>
  (
    <li className={`KUI-atom-Item-ul ${className || ''}`} {...rest}>
      {children}
    </li>
  ) as AtomListItemElement;
