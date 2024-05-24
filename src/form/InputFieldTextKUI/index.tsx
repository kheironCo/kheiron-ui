import { ChangeEvent } from 'react';
import { AtomDiv, AtomInput } from '@KUI-element';
import { divStyles, input, labelParentDiv } from './styles';
import { LabelKUI } from 'form/base/LabelKUI';

export type InputFieldTextKUIProps = {
  value?: string;
  label: string;
  placeHolder?: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const InputFieldTextKUI = ({
  label,
  value,
  placeHolder,
  handleChange,
}: InputFieldTextKUIProps) => {
  return (
    <AtomDiv className="KUI-inputfield-root" css={divStyles}>
      <LabelKUI
        htmlFor="toinput"
        className="KUI-inputfield-label"
        css={labelParentDiv}
        label={label}
      >
        <AtomInput
          className="KUI-inputfield-input"
          css={input}
          placeholder={placeHolder}
          value={value}
          onChange={handleChange}
          id="toinput"
        />
      </LabelKUI>
    </AtomDiv>
  );
};
