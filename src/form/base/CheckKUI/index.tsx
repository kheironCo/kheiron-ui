import { ChangeEvent, useState } from 'react';
import { CheckRoot, InputCheckBox, LabelCheckBox } from './styles';
import { AtomDiv, AtomInput, AtomLabel } from '../../../element';
import { IconCheckBox } from '../../../icons';

type CheckboxParameters = Parameters<typeof AtomInput>[0];
export type CheckKUIProps = Pick<CheckboxParameters, 'onChange'> & {
  checked?: boolean;
  getValue?: (checked: boolean) => void;
  icon?: React.ReactElement;
  iconChecked?: React.ReactElement;
  className?: string;
  id?: string;
};

export const CheckKUI = ({
  checked = false,
  getValue,
  icon,
  iconChecked,
  className,
  onChange,
}: CheckKUIProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const _onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (getValue) getValue(e.target.checked);
    if (onChange) onChange(e);
    setIsChecked(e.target.checked);
  };

  return (
    <AtomDiv css={CheckRoot} className={`KUI-check-root ${className || ''}`}>
      <AtomInput
        css={InputCheckBox}
        checked={isChecked}
        onChange={_onChange}
        id="KUICheck"
        className="KUI-check-input"
        type="checkbox"
      />
      <AtomLabel css={LabelCheckBox} htmlFor="KUICheck" className="KUI-check-label">
        {isChecked ? iconChecked || <IconCheckBox checked /> : icon || <IconCheckBox />}
      </AtomLabel>
    </AtomDiv>
  );
};
