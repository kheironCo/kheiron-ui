type TableHeadProps = React.HTMLAttributes<HTMLTableSectionElement>;

export interface TableHeadElement extends React.JSX.Element {}

export const TableHead = ({ children, className, ...rest }: TableHeadProps) =>
  (
    <thead className={`KUI-atom-element-thead ${className || ''}`} {...rest}>
      {children}
    </thead>
  ) as TableHeadElement;
