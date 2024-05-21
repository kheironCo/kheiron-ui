import { ReactElement } from 'react';
import { AtomDiv } from '@KUI-element';
import { PositionStyle, AlignStyle } from './styles';
import { PositionType, AlignType } from './types';

export type LabelKUIProps = {
  label?: string;
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
      <LabelKUI css={AlignStyle[align]} htmlFor={htmlFor} label={label}>
        {children}
      </LabelKUI>
    </AtomDiv>
  );
};
