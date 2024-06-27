import { AtomInputProps } from '../../element';

import {
  AtomDivComponentStyled,
  AtomInputComponentStyled,
  LabelKUIComponentStyled,
} from './styles';

export type InputFieldTextKUIProps = AtomInputProps & {
  label: string;
  width?: string;
};

export const InputFieldTextKUI = ({ label, width, ...rest }: InputFieldTextKUIProps) => {
  const idCreado = Math.random() * 1000000;
  const idUnico = `idUnico-${idCreado}`;
  return (
    <AtomDivComponentStyled className="KUI-inputfield-root">
      <LabelKUIComponentStyled htmlFor="toinput" className="KUI-inputfield-label" label={label}>
        <AtomInputComponentStyled
          className="KUI-inputfield-input"
          id={idUnico}
          width={width}
          {...rest}
        />
      </LabelKUIComponentStyled>
    </AtomDivComponentStyled>
  );
};
