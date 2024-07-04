import styled from 'styled-components';
import { AtomDiv } from '../../element';
import { ButtonKUI } from '../../form';

export const Root = styled(AtomDiv)`
  display: flex;
  flex-direction: row;
`;

export const ButtonStyled = styled(ButtonKUI)`
  width: 2.25rem !important;
  height: 2.25rem !important;
  padding: 0 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`;
