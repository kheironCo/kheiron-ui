import { CheckKUI, CheckKUIProps } from '@KUI-form';
import { AtomDiv } from '@KUI-element';
import { LabelKUI, LabelKUIProps } from '@KUI-form';

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
        <CheckKUI label={label} {...rest} checked={checked} className="KUI-checkbox-check" />
      </LabelKUI>
    </AtomDiv>
  );
};
