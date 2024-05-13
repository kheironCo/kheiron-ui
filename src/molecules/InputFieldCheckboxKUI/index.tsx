import { CheckKUI, CheckKUIProps } from '../../atom/CheckKUI';
import { AtomDiv } from '../../element';
import { LabelKUI, LabelKUIProps } from '../LabelKUI';

export type PositionType = 'top' | 'bottom' | 'left' | 'right';

export type CheckboxKUIProps = CheckKUIProps &
  LabelKUIProps & {
    label?: string;
    position: PositionType;
    value?: boolean;
  };

export const InputFieldCheckboxKUI = ({ label, position, value }: CheckboxKUIProps) => {
  //Usar LabelKUI
  return (
    <AtomDiv className={'KUI-checkbox-root'}>
      <LabelKUI
        htmlFor="labelId"
        className={'KUI-checkbox-label'}
        label={label}
        position={position}
      >
        <CheckKUI checked={value} className="KUI-checkbox-check" />
      </LabelKUI>
    </AtomDiv>
  );
};
