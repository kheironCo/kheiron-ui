import styled from '@emotion/styled/macro';
import { FiAlertTriangle, FiCheckSquare, FiInfo, FiXOctagon } from 'react-icons/fi';

export const WarnIcon = styled(FiAlertTriangle)`
  height: 2rem;
  color: yellow;
`;

export const SuccessIcon = styled(FiCheckSquare)`
  height: 2rem;
  color: green;
`;

export const InfoIcon = styled(FiInfo)`
  height: 2rem;
  color: blue;
`;

export const ErrorIcon = styled(FiXOctagon)`
  height: 2rem;
  color: red;
`;
