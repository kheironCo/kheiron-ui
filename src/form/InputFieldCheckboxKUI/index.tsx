import { CheckKUI, CheckKUIProps, LabelKUI, LabelKUIProps } from '../base';
import { AtomDiv } from '../../element';

export type CheckboxKUIProps = CheckKUIProps & LabelKUIProps;

export const InputFieldCheckboxKUI = ({ label, position, checked, ...rest }: CheckboxKUIProps) => {
  return (
    <AtomDiv className="KUI-checkbox-root">
      <LabelKUI htmlFor="labelId" className="KUI-checkbox-label" label={label} position={position}>
        <CheckKUI {...rest} checked={checked} className="KUI-checkbox-check" />
      </LabelKUI>
    </AtomDiv>
  );
};
