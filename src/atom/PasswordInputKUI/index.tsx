import { AtomDiv, AtomInput } from '../../element';
import { CheckKUI } from '../CheckKUI';
import { DivStyle } from './styles';
import { IconEye } from '../../icons';
import { IconEyeClosed } from '../../icons';
import { ChangeEvent, useState } from 'react';
import { PasswordInputKUIProps } from './types';

export const PasswordInputKUI = ({ getValue }: PasswordInputKUIProps) => {
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
        className="KUI-PasswordInput-check"
        getValue={(checked) => setVisible(checked)}
        icon={<IconEye />}
        iconChecked={<IconEyeClosed />}
      />
    </AtomDiv>
  );
};
