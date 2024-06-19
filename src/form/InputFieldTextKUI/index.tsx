import { AtomDiv, AtomInput } from '../../element';
import { LabelKUI } from '../base';
import { divStyles, input, inputWidth, labelParentDiv } from './styles';

export type InputFieldTextKUIProps = {
  value?: string;
  label: string;
  placeHolder?: string;
  handleChange?: Parameters<typeof AtomDiv>[0]['onChange'];
  width?: 'small' | 'medium';
};

export const InputFieldTextKUI = ({
  label,
  value,
  placeHolder,
  handleChange,
  width,
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
          css={width == 'small' ? input : inputWidth}
          placeholder={placeHolder}
          value={value}
          onChange={handleChange}
          id="toinput"
        />
      </LabelKUI>
    </AtomDiv>
  );
};
