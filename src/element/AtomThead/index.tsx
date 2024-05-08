type AtomTheadProps = React.HTMLAttributes<HTMLTableSectionElement>;

export interface AtomTheadElement extends React.JSX.Element {}

export const AtomThead = ({ children, className, ...rest }: AtomTheadProps) =>
  (
    <thead className={`KUI-atom-element-thead ${className || ''}`} {...rest}>
      {children}
    </thead>
  ) as AtomTheadElement;
