import { SerializedStyles } from '@emotion/react';
import { AtomInputProps } from 'element';

export type PasswordInputKUIProps = AtomInputProps & {
  getValue?: (value: string) => void;
  css?: SerializedStyles;
  width?: string;
};
