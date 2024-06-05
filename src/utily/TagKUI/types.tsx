import { ReactNode } from 'react';
import { AtomDiv } from '../../element';
import { SerializedStyles } from '@emotion/react';

export type ColorType = 'main' | 'blue' | 'yellow' | 'red' | 'black' | 'white';
export type BorderType = 'none' | 'solid' | 'dashed' | 'dotted';

export type StyledBgType = Record<ColorType, SerializedStyles>;
export type StyledBorderType = Record<BorderType, SerializedStyles>;

export type TagKUIProps = Parameters<typeof AtomDiv>[0] & {
  label: ReactNode;
  color?: ColorType;
  border?: BorderType;
};
