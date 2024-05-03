import React from 'react';

type AtomSectionProps = React.HTMLAttributes<HTMLDivElement>;

export interface AtomSectionElement extends React.JSX.Element {}

export const AtomSection = ({
  children,
  className,
  ...rest
}: AtomSectionProps) =>
  (
    <section
      className={`KUI-atom-element-section ${className || ''}`}
      {...rest}
    >
      {children}
    </section>
  ) as AtomSectionElement;
