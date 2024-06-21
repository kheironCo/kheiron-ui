import { ChangeEvent, useState } from 'react';
import {
  AtomDivComponentStyled,
  AtomInputComponentStyled,
  AtomLabelComponentStyled,
} from './styles';
import { AtomInput } from '../../../element';
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
    <AtomDivComponentStyled className={`KUI-check-root ${className || ''}`}>
      <AtomInputComponentStyled
        checked={isChecked}
        onChange={_onChange}
        id="KUICheck"
        className="KUI-check-input"
        type="checkbox"
      />
      <AtomLabelComponentStyled htmlFor="KUICheck" className="KUI-check-label">
        {isChecked ? iconChecked || <IconCheckBox checked /> : icon || <IconCheckBox />}
      </AtomLabelComponentStyled>
    </AtomDivComponentStyled>
  );
};
