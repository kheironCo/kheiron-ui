export type AtomListItemProps = React.DetailedHTMLProps<
  React.LiHTMLAttributes<HTMLLIElement>,
  HTMLLIElement
>;

export const AtomListItem = ({ children, className, ...rest }: AtomListItemProps) => (
  <li className={`KUI-atom-Item-ul ${className || ''}`} {...rest}>
    {children}
  </li>
);
