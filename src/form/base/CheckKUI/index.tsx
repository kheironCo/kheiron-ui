import { ChangeEvent, forwardRef, useId, useState } from 'react';
import {
  AtomDivComponentStyled,
  AtomInputComponentStyled,
  AtomLabelComponentStyled,
} from './styles';
import { FaRegSquare, FaCheckSquare } from 'react-icons/fa';

type CheckboxParameters = Parameters<typeof AtomInputComponentStyled>[0];
export type CheckKUIProps = CheckboxParameters & {
  checked?: boolean;
  getValue?: (checked: boolean) => void;
  icon?: React.ReactElement;
  iconChecked?: React.ReactElement;
  className?: string;
};

export const CheckKUI = forwardRef<HTMLInputElement, CheckKUIProps>(
  ({ checked = false, getValue, icon, iconChecked, className, onChange, ...rest }, ref) => {
    const [isChecked, setIsChecked] = useState(checked);
    const id = useId();

    const _onChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (getValue) getValue(e.target.checked);
      if (onChange) onChange(e);
      setIsChecked(e.target.checked);
    };

    return (
      <AtomDivComponentStyled className={`KUI-check-root ${className || ''}`}>
        <AtomInputComponentStyled
          {...rest}
          checked={isChecked}
          onChange={_onChange}
          id={id}
          className="KUI-check-input"
          type="checkbox"
          ref={ref}
        />
        <AtomLabelComponentStyled htmlFor={id} className="KUI-check-label">
          {isChecked
            ? iconChecked || <FaCheckSquare color="#583d6b" />
            : icon || <FaRegSquare color="#583d6b" />}
        </AtomLabelComponentStyled>
      </AtomDivComponentStyled>
    );
  },
);

CheckKUI.displayName = 'CheckKUI';
