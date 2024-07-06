import React from 'react';

type TableFootProps = React.ClassAttributes<HTMLTableSectionElement> &
  React.HTMLAttributes<HTMLTableSectionElement>;

export interface TableFootElement extends React.JSX.Element {}

export const TableFoot = ({ children, className, ...rest }: TableFootProps) =>
  (
    <tfoot className={`KUI-atom-element-tfoot ${className || ''}`} {...rest}>
      {children}
    </tfoot>
  ) as TableFootElement;
