import { AtomInputComponentStyled } from './styles';

export type CurrencyInputKUIProps = Parameters<typeof AtomInputComponentStyled>[0] & {
  value?: number;
  width?: string;
};
