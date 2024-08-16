import { AtomInputComponentStyled } from './styles';

export type PasswordInputKUIProps = Parameters<typeof AtomInputComponentStyled>[0] & {
  width?: string;
};
