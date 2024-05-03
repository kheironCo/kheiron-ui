
type AtomInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export interface AtomInputElement extends React.JSX.Element {}

export const AtomInput = ({ className, ...rest }: AtomInputProps) =>
<<<<<<< HEAD
  (
    <input className={`KUI-atom-element-input ${className || ''}`} {...rest} />
  ) as AtomInputElement;

=======
  (<input className={`KUI-atom-element-input ${className || ''}`} {...rest} />) as AtomInputElement;
>>>>>>> dev
