import { AtomDiv, AtomInput } from '@KUI-element';

import { DivStyle } from './styles';
import { IconEye } from '@KUI-icons';
import { IconEyeClosed } from '@KUI-icons';
import { ChangeEvent, useState } from 'react';
import { PasswordInputKUIProps } from './types';
import { CheckKUI } from '@KUI-form';

export const PasswordInputKUI = ({ getValue, label }: PasswordInputKUIProps) => {
  const [visible, setVisible] = useState(false);

  const [_value, _setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (getValue) getValue(e.target.value);
    _setValue(e.target.value);
  };

  return (
    <AtomDiv css={DivStyle} className="KUI-PasswordInput-div">
      <AtomInput
        onChange={handleChange}
        value={_value}
        type={visible ? 'text' : 'password'}
        className="KUI-PasswordInput-input"
      />
      <CheckKUI
        label={label}
        className="KUI-PasswordInput-check"
        getValue={(checked) => setVisible(checked)}
        icon={<IconEye />}
        iconChecked={<IconEyeClosed />}
      />
    </AtomDiv>
  );
};
