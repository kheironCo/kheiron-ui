import { HTMLAttributes } from 'react';

export type AtomTrProps = React.DetailedHTMLProps<
  HTMLAttributes<HTMLTableRowElement>,
  HTMLTableRowElement
>;

export interface AtomTrElement extends JSX.Element {}

export const AtomTr = ({ children, className, ...rest }: AtomTrProps) =>
  (
    <tr className={`KUI-atom-element-tr ${className || ''}`} {...rest}>
      {children}
    </tr>
  ) as AtomTrElement;
