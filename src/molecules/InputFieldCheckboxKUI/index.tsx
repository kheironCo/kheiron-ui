import { CheckKUI } from '../../atom/CheckKUI';
import { AtomDiv, AtomLabel } from '../../element';
import { PositionStyle } from './styles';


export type PositionType = 'top' | 'bottom' | 'left' | 'right';

export type CheckboxKUIProps = {
  label?: string;
  position: PositionType;
  value?: boolean;
  handleChange?: () => void;
};

export const InputFieldCheckboxKUI = ({ label=" ", position= "top", value, handleChange }: CheckboxKUIProps) => {
  return (
    <AtomDiv className="KUI-checkbox-root" css={PositionStyle[position]}>
      <CheckKUI checked={value} className="KUI-checkbox-check"  />
      <AtomLabel className="KUI-checkbox-label"  onChange={handleChange}>{label}</AtomLabel>
    </AtomDiv>
  );
};
