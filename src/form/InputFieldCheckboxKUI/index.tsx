import { forwardRef } from 'react';
import { CheckKUI, CheckKUIProps, LabelKUI, LabelKUIProps } from '../base';
import { AtomDiv } from '../../element';

export type CheckboxKUIProps = CheckKUIProps & LabelKUIProps;

export const InputFieldCheckboxKUI = forwardRef<HTMLInputElement, CheckboxKUIProps>(
  ({ label, position, checked, ...rest }, ref) => {
    return (
      <AtomDiv className="KUI-checkbox-root">
        <LabelKUI className="KUI-checkbox-label" label={label} position={position}>
          <CheckKUI {...rest} checked={checked} className="KUI-checkbox-check" ref={ref} />
        </LabelKUI>
      </AtomDiv>
    );
  },
);

InputFieldCheckboxKUI.displayName = 'InputFieldCheckboxKUI';
