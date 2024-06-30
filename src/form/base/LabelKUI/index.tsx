import { ReactElement } from 'react';
import { AtomDiv, AtomLabel } from '../../../element';
import { PositionStyle } from './styles';
import { PositionType } from './types';

export type LabelKUIProps = {
  label?: string;
  position?: PositionType;
  htmlFor?: string;
  className?: string;
};
type Props = LabelKUIProps & {
  children: ReactElement | string;
};

export const LabelKUI = ({ position = 'top', htmlFor, children, className, label }: Props) => {
  return (
    <AtomDiv className={className}>
      <AtomLabel css={PositionStyle[position]} htmlFor={htmlFor}>
        <AtomDiv>{label}</AtomDiv>
        <AtomDiv>{children}</AtomDiv>
      </AtomLabel>
    </AtomDiv>
  );
};
