import { CheckKUI, CheckKUIProps } from '../../atom/CheckKUI';
import { AtomDiv } from '../../element';
import { LabelKUI, LabelKUIProps } from '../LabelKUI';

export type PositionType = 'top' | 'bottom' | 'left' | 'right';

export type CheckboxKUIProps = CheckKUIProps &
  LabelKUIProps & {

  };

export const InputFieldCheckboxKUI = ({ label, position, checked }: CheckboxKUIProps) => {
  //Usar LabelKUI
  return (
    <AtomDiv className="KUI-checkbox-root">
      <LabelKUI
        htmlFor="labelId"
        className="KUI-checkbox-label"
        label={label}
        position={position}
      >
        <CheckKUI checked={checked} className="KUI-checkbox-check" />
      </LabelKUI>
    </AtomDiv>
  );
};
