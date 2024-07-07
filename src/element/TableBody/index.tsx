type TableBodyProps = React.HTMLAttributes<HTMLTableSectionElement>;

export interface TableBodyElement extends React.JSX.Element {}

export const TableBody = ({ children, className, ...rest }: TableBodyProps) =>
  (
    <tbody className={`KUI-atom-element-tbody ${className || ''}`} {...rest}>
      {children}
    </tbody>
  ) as TableBodyElement;
