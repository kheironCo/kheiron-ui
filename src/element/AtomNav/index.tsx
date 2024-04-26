import React from 'react';

interface AtomNavProps{
  children?: React.JSX.Element;
  className?: string;
}
export interface AtomNav extends React.JSX.Element {}

export const AtomNav = ({ children, className, ...rest }: AtomNavProps) =>
  (
    <nav className={`KUI-atom-nav ${className || ''}`} {...rest}>
      {children}
    </nav>
  ) as AtomNav;
