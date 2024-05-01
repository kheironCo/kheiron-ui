import { ChangeEvent } from 'react';
import { AtomDiv, AtomLabel, AtomInput } from '../../element';
import { divStyles, input, labelParentDiv } from './styles';

export type InputFieldKUIProps = {
  value?: string;
  label?: string;
  placeHolder?: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const InputFieldKUI = ({ label, value, placeHolder, handleChange }: InputFieldKUIProps) => {
  return (
    <AtomDiv className="KUI-inputfield-root" css={divStyles}>
      <AtomLabel htmlFor="toinput" className="KUI-inputfield-label" css={labelParentDiv}>
        {label}
      </AtomLabel>
      <AtomInput
        className="KUI-inputfield-input"
        css={input}
        placeholder={placeHolder}
        value={value}
        onChange={handleChange}
        id="toinput"
      />
    </AtomDiv>
  );
};
