import { ChangeEvent, ReactElement, useState } from 'react';
import { CheckRoot, InputCheckBox, LabelCheckBox } from './styles';
import { IconCheckBox } from '@KUI-icons';
import { LabelKUI } from 'form/LabelKUI';
import { AtomDiv, AtomInput } from '@KUI-element';

export type CheckKUIProps = {
  checked?: boolean;
  getValue?: (checked: boolean) => void;
  icon?: ReactElement;
  iconChecked?: ReactElement;
  className: string;
  id?: string;
  label: string;
};

export const CheckKUI = ({
  checked = false,
  getValue,
  icon,
  iconChecked,
  className,
  label,
}: CheckKUIProps) => {
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
        className={`KUI-check-input ${className || ''}`}
      />
      <LabelKUI label={label} css={LabelCheckBox} htmlFor="KUICheck" className="KUI-check-label">
        {_value ? iconChecked || <IconCheckBox checked /> : icon || <IconCheckBox />}
      </LabelKUI>
    </AtomDiv>
  );
};
