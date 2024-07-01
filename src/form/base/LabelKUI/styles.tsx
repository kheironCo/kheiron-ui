import { PositionType } from './types';
import styled from 'styled-components';
import { AtomLabel } from '../../../element';

const LabelPosition: Record<PositionType, string> = {
  top: 'column',
  bottom: 'column-reverse',
  left: 'row',
  right: 'row-reverse',
};

export const LabelStyledKUI = styled(AtomLabel)<{ position?: PositionType }>`
  display: flex;
  ${(props) => props.position === 'right' && 'justify-content: left;'}
  flex-direction: ${(props) => LabelPosition[props.position ?? 'top']};
`;
