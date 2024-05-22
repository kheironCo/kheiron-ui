type AtomThProps = React.HTMLAttributes<HTMLTableCellElement>;

export interface AtomThElement extends React.JSX.Element {}

export const AtomTh = ({ children, className, ...rest }: AtomThProps) =>
  (
    <th className={`KUI-atom-element-th ${className || ''}`} {...rest}>
      {children}
    </th>
  ) as AtomThElement;
