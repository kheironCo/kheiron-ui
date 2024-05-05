type AtomTdProps = React.HTMLAttributes<HTMLTableCellElement>;

export interface AtomTdElement extends React.JSX.Element {}

export const AtomTd = ({ children, className, ...rest }: AtomTdProps) =>
  (
    <td className={`KUI-atom-element-Td ${className || ''}`} {...rest}>
      {children}
    </td>
  ) as AtomTdElement;
