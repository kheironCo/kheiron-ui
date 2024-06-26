import { AtomDiv, AtomInputProps } from '../../element';

import {
  AtomDivComponentStyled,
  AtomInputComponentStyled,
  LabelKUIComponentStyled,
} from './styles';

export type InputFieldTextKUIProps = AtomInputProps & {
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
  ...rest
}: InputFieldTextKUIProps) => {
  const idCreado = Math.random() * 1000000;
  const idUnico = `idUnico-${idCreado}`;
  return (
    <AtomDivComponentStyled className="KUI-inputfield-root">
      <LabelKUIComponentStyled htmlFor="toinput" className="KUI-inputfield-label" label={label}>
        <AtomInputComponentStyled
          className="KUI-inputfield-input"
          placeholder={placeHolder}
          value={value}
          onChange={handleChange}
          id={idUnico}
          width={width}
          {...rest}
        />
      </LabelKUIComponentStyled>
    </AtomDivComponentStyled>
  );
};
