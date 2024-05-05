type AtomTrProps = React.HTMLAttributes<HTMLTableRowElement>;

export interface AtomTrElement extends React.JSX.Element {}

export const AtomTr = ({ children, className, ...rest }: AtomTrProps) =>
  (
    <tr className={`KUI-atom-element-tr ${className || ''}`} {...rest}>
      {children}
    </tr>
  ) as AtomTrElement;
