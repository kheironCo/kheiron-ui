
type AtomInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export interface AtomInputElement extends React.JSX.Element {}

export const AtomInput: React.FC<AtomInputProps & { handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void }> = ({ className, handleChange, ...rest }) =>
  (
    <input className={`KUI-atom-element-input ${className || ''}`} {...rest} onChange={handleChange} />
  ) as AtomInputElement;

