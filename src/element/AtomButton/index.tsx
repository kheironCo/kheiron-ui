export type AtomButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export interface AtomButtonJSXElement extends React.JSX.Element {}

export const AtomButton = ({ className, children, ...rest }: AtomButtonProps) =>
  (
    <button className={`KUI-element-button ${className || ''}`} {...rest}>
      {children}
    </button>
  ) as AtomButtonJSXElement;
