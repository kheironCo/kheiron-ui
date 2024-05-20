import { CheckKUI, CheckKUIProps } from '../../atom/CheckKUI';
import { AtomDiv } from '../../element';
import { LabelKUI, LabelKUIProps } from '../LabelKUI';

export type CheckboxKUIProps = Omit<CheckKUIProps,"id"> & Omit<LabelKUIProps, "htmlFor"> ;

export const InputFieldCheckboxKUI = ({ label, position, checked,  ...rest}: CheckboxKUIProps) => {
  

  return (
    <AtomDiv className="KUI-checkbox-root">
      <LabelKUI
        htmlFor="labelId"
        className="KUI-checkbox-label"
        label={label}
        position={position}
      >
        <CheckKUI {...rest} checked={checked} className="KUI-checkbox-check" />
      </LabelKUI>
    </AtomDiv>
  );
};
