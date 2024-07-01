import { forwardRef, useState } from 'react';
import { IconEye, IconEyeClosed } from '../../../icons';
import { CheckKUI } from '../CheckKUI';
import { AtomDivComponentStyled, AtomInputComponentStyled } from './styles';
import { PasswordInputKUIProps } from './types';

export const PasswordInputKUI = forwardRef<HTMLInputElement, PasswordInputKUIProps>(
  ({ ...rest }, ref) => {
    const [visible, setVisible] = useState(false);

    return (
      <AtomDivComponentStyled className="KUI-PasswordInput-div">
        <AtomInputComponentStyled
          type={visible ? 'text' : 'password'}
          className="KUI-PasswordInput-input"
          {...rest}
          ref={ref}
        />
        <CheckKUI
          className="KUI-PasswordInput-check"
          getValue={(checked) => setVisible(checked)}
          icon={<IconEye />}
          iconChecked={<IconEyeClosed />}
        />
      </AtomDivComponentStyled>
    );
  },
);

PasswordInputKUI.displayName = 'PasswordInputKUI';
