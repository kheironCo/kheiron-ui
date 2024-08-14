import { ReactElement } from 'react';
import { AtomDiv, Heading } from '../../../element';
import { AtomSpanStyled, LabelStyledKUI } from './styles';
import { PositionType } from './types';

export type LabelKUIProps = Pick<Parameters<typeof Heading>[0], 'weight'> & {
  label?: string;
  position?: PositionType;
  htmlFor?: string;
  className?: string;
  required?: boolean;
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
  required = false,
}: Props) => {
  return (
    <AtomDiv className={className}>
      <LabelStyledKUI {...{ position, htmlFor }}>
        <AtomDiv style={{ display: 'flex'}}>
        <Heading as="h4" weight={weight}>
          {label}
        </Heading>
        <AtomSpanStyled>{required && '*'}</AtomSpanStyled>
        </AtomDiv>
        <AtomDiv>{children}</AtomDiv>
      </LabelStyledKUI>
    </AtomDiv>
  );
};
