import { ChangeEvent, ReactElement, useState } from 'react';
import { CheckRoot, InputCheckBox, LabelCheckBox } from './styles';
import { IconCheckBox } from '../../icons';
import { AtomDiv, AtomInput, AtomLabel } from '../../element';

export type CheckKUIProps = {
  checked?: boolean;
  getValue?: (checked: boolean) => void;
  icon?: ReactElement;
  iconChecked?: ReactElement;
};

export const CheckKUI = ({ checked = false, getValue, icon, iconChecked }: CheckKUIProps) => {
  const [_value, _setValue] = useState(checked);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (getValue) getValue(e.target.checked);
    _setValue(e.target.checked);
  };
  return (
    <AtomDiv css={CheckRoot} className="KUI-check-root">
      <AtomInput
        css={InputCheckBox}
        checked={_value}
        onChange={handleChange}
        type="checkbox"
        id="KUICheck"
        className="KUI-check-input"
      />
      <AtomLabel css={LabelCheckBox} htmlFor="KUICheck" className="KUI-check-label">
        {_value ? iconChecked || <IconCheckBox checked /> : icon || <IconCheckBox />}
      </AtomLabel>
    </AtomDiv>
  );
};