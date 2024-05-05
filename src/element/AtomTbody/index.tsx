type AtomTbodyProps = React.HTMLAttributes<HTMLTableSectionElement>;

export interface AtomTbodyElement extends React.JSX.Element {}

export const AtomTbody = ({ children, className, ...rest }: AtomTbodyProps) =>
  (
    <tbody className={`KUI-atom-element-tbody ${className || ''}`} {...rest}>
      {children}
    </tbody>
  ) as AtomTbodyElement;
