import { AtomDiv } from '../../element';

import {
  AtomDivComponentStyled,
  AtomInputComponentStyled,
  LabelKUIComponentStyled,
} from './styles';

export type InputFieldTextKUIProps = {
  value?: string;
  label: string;
  placeHolder?: string;
  handleChange?: Parameters<typeof AtomDiv>[0]['onChange'];
  width?: string;
};

export const InputFieldTextKUI = ({
  label,
  value,
  placeHolder,
  handleChange,
  width,
}: InputFieldTextKUIProps) => {
  return (
    <AtomDivComponentStyled className="KUI-inputfield-root">
      <LabelKUIComponentStyled htmlFor="toinput" className="KUI-inputfield-label" label={label}>
        <AtomInputComponentStyled
          className="KUI-inputfield-input"
          placeholder={placeHolder}
          value={value}
          onChange={handleChange}
          id="toinput"
          width={width}
        />
      </LabelKUIComponentStyled>
    </AtomDivComponentStyled>
  );
};
