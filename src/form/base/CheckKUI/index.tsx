import { ChangeEvent, useState } from 'react';
import { CheckRoot, InputCheckBox, LabelCheckBox } from './styles';
import { AtomDiv, AtomInput, AtomLabel } from '../../../element';
import { IconCheckBox } from '../../../icons';

export type CheckKUIProps = {
  checked?: boolean;
  getValue?: (checked: boolean) => void;
  icon?: React.ReactElement;
  iconChecked?: React.ReactElement;
  className: string;
  id?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const CheckKUI = ({
  checked = false,
  getValue,
  icon,
  iconChecked,
  className,
  value,
  onChange,
}: CheckKUIProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (getValue) getValue(e.target.checked);
    setIsChecked(e.target.checked);
  };

  return (
    <AtomDiv css={CheckRoot} className="KUI-check-root">
      <AtomInput
        value={value}
        css={InputCheckBox}
        checked={isChecked}
        onChange={handleChange ?? onChange}
        id="KUICheck"
        className={`KUI-check-input ${className || ''}`}
        type="radio"
      />
      <AtomLabel css={LabelCheckBox} htmlFor="KUICheck" className="KUI-check-label">
        {isChecked ? iconChecked || <IconCheckBox checked /> : icon || <IconCheckBox />}
      </AtomLabel>
    </AtomDiv>
  );
};
