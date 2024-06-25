import { SerializedStyles } from '@emotion/react';

export type PasswordInputKUIProps = {
  getValue?: (value: string) => void;
  css?: SerializedStyles;
  width?: string;
};
