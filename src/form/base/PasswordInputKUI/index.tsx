import { ChangeEvent, useState } from 'react';
import { IconEye, IconEyeClosed } from '../../../icons';
import { CheckKUI } from '../CheckKUI';
import { AtomDivComponentStyled, AtomInputComponentStyled } from './styles';
import { PasswordInputKUIProps } from './types';

export const PasswordInputKUI = ({ getValue, width, onChange, ...rest }: PasswordInputKUIProps) => {
  const [visible, setVisible] = useState(false);

  const [_value, _setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (getValue) getValue(e.target.value);
    if (onChange) onChange(e);
    _setValue(e.target.value);
  };

  const idUnico = `idUnico-${Math.random() * 10000}`;

  return (
    <AtomDivComponentStyled className="KUI-PasswordInput-div">
      <AtomInputComponentStyled
        onChange={handleChange}
        value={_value}
        type={visible ? 'text' : 'password'}
        className="KUI-PasswordInput-input"
        width={width}
        {...rest}
      />
      <CheckKUI
        className="KUI-PasswordInput-check"
        getValue={(checked) => setVisible(checked)}
        icon={<IconEye />}
        id={idUnico}
        iconChecked={<IconEyeClosed />}
      />
    </AtomDivComponentStyled>
  );
};
