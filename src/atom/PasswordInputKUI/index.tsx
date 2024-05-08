import { AtomDiv, AtomInput } from '../../element';
import { CheckKUI } from '../CheckKUI';
import { DivStyle } from './styles';
import { IconEye } from '../../icons/iconPassword';
import { IconEye2 } from '../../icons/iconPasswordChecked';
import { ChangeEvent, useState } from 'react';
import { PasswordInputKUIProps } from './types';

export const PasswordInputKUI = ({getValue}: PasswordInputKUIProps) => {
  const [activo, setActivo] = useState(false);

  const [_value, _setValue] = useState(" ");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (getValue) getValue(e.target.value);
    _setValue(e.target.value);
  };

  return (
    <AtomDiv css={DivStyle}>
      <AtomInput onChange={handleChange} value={_value} type={!activo ? 'password' : 'text'} />
      <CheckKUI getValue={(checked) =>setActivo(checked)} icon={<IconEye />} iconChecked={<IconEye2 />} />
    </AtomDiv>
  );
};
