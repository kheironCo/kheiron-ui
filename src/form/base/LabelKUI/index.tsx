import { ReactElement } from 'react';
import { AtomDiv, Heading } from '../../../element';
import { LabelStyledKUI } from './styles';
import { PositionType } from './types';

export type LabelKUIProps = Pick<Parameters<typeof Heading>[0], 'weight'> & {
  label?: string;
  position?: PositionType;
  htmlFor?: string;
  className?: string;
};
type Props = LabelKUIProps & {
  children: ReactElement | string;
};

export const LabelKUI = ({
  position = 'top',
  weight = 'normal',
  htmlFor,
  children,
  className,
  label,
}: Props) => {
  return (
    <AtomDiv className={className}>
      <LabelStyledKUI {...{ position, htmlFor }}>
        <Heading as="h4" weight={weight}>
          {label}
        </Heading>
        <AtomDiv>{children}</AtomDiv>
      </LabelStyledKUI>
    </AtomDiv>
  );
};
