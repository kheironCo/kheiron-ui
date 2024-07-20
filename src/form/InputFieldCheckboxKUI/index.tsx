import { forwardRef } from 'react';
import { CheckKUI, CheckKUIProps, LabelKUI, LabelKUIProps } from '../base';
import { AtomDiv } from '../../element';
import { SpanComponentStyled } from './styles';

export type CheckboxKUIProps = CheckKUIProps &
  LabelKUIProps & {
    errorMessage?: string;
  };

export const InputFieldCheckboxKUI = forwardRef<HTMLInputElement, CheckboxKUIProps>(
  ({ label, errorMessage, position = 'right', checked, ...rest }, ref) => {
    return (
      <AtomDiv className="KUI-checkbox-root">
        <LabelKUI className="KUI-checkbox-label" label={label} position={position}>
          <CheckKUI {...rest} checked={checked} className="KUI-checkbox-check" ref={ref} />
        </LabelKUI>
        <SpanComponentStyled>{errorMessage}</SpanComponentStyled>
      </AtomDiv>
    );
  },
);

InputFieldCheckboxKUI.displayName = 'InputFieldCheckboxKUI';
