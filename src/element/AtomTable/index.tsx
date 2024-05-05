type AtomTableProps = React.HTMLAttributes<HTMLTableElement>;

export interface AtomTableElement extends React.JSX.Element {}

export const AtomTable = ({ children, className, ...rest }: AtomTableProps) =>
  (
    <table className={`KUI-atom-element-table ${className || ''}`} {...rest}>
      {children}
    </table>
  ) as AtomTableElement;
