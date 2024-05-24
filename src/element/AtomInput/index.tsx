export type AtomInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export interface AtomInputElement extends React.JSX.Element {}

export const AtomInput = ({ className, type, ...rest }: AtomInputProps) =>
  (<input type="radio" className={`KUI-atom-element-input ${className || ''}`} {...rest} />) as AtomInputElement;
