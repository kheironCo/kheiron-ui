import { CheckKUI } from "../../atom/CheckKUI";
import { AtomDiv, AtomLabel } from "../../element";
import { PositionStyle } from "./styles";

export type PositionType = 'top' | 'bottom' | 'left' | 'right';

export type CheckboxKUIProps = {
 label?: string;
 position: PositionType;
 value?: boolean;
 handleChange?: () => void;
};

export const InputFieldCheckboxKUI = ({ label, position  }: CheckboxKUIProps) => {
  

  return (
    <AtomDiv className="KUI-checkbox-root" css={PositionStyle[position]}>
        <CheckKUI className="KUI-checkbox-check"/>
        <AtomLabel className="KUI-checkbox-label">{label}</AtomLabel>
    </AtomDiv>
  );
};
