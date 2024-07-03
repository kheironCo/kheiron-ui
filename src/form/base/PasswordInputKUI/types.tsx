import { SerializedStyles } from '@emotion/react';
import { AtomInputComponentStyled } from './styles';

export type PasswordInputKUIProps = Parameters<typeof AtomInputComponentStyled>[0] & {
  css?: SerializedStyles;
  width?: string;
};
