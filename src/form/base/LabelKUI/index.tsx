import { ReactElement } from 'react';
import { AtomDiv, Paragraph } from '../../../element';
import { LabelStyledKUI } from './styles';
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
      <LabelStyledKUI {...{ position, htmlFor }}>
        <Paragraph>{label}</Paragraph>
        <AtomDiv>{children}</AtomDiv>
      </LabelStyledKUI>
    </AtomDiv>
  );
};
