import { ReactElement } from 'react';
import { AtomDiv, AtomLabel } from '../../element';
import { PositionStyle, AlignStyle } from './styles';
import { PositionType, AlignType } from './types';

export type LabelKUIProps = {
  label: string;
  position?: PositionType;
  align?: AlignType;
  htmlFor?: string;
  children: ReactElement;
  className?: string;
};

export const LabelKUI = ({
  position = 'top',
  align = 'left',
  htmlFor,
  children,
  label,
  className,
}: LabelKUIProps) => {
  return (
    <AtomDiv className={className} css={PositionStyle[position]}>
      <AtomLabel css={AlignStyle[align]} htmlFor={htmlFor}>
        {label}
      </AtomLabel>
      {children}
    </AtomDiv>
  );
};
