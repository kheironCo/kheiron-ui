import { ReactElement } from 'react';
import { AtomDiv, AtomLabel } from '../../../element';
import { PositionStyle, AlignStyle } from './styles';
import { PositionType, AlignType } from './types';

export type LabelKUIProps = {
  label?: string;
  position?: PositionType;
  align?: AlignType;
  htmlFor?: string;
  children: ReactElement | string;
  className?: string;
};

export const LabelKUI = ({
  position = 'top',
  align = 'left',
  htmlFor,
  children,
  className,
  label,
}: LabelKUIProps) => {
  return (
    <AtomDiv className={className}>
      <AtomLabel css={[AlignStyle[align], PositionStyle[position]]} htmlFor={htmlFor}>
        <AtomDiv>{label}</AtomDiv>
        <AtomDiv>{children}</AtomDiv>
      </AtomLabel>
    </AtomDiv>
  );
};
