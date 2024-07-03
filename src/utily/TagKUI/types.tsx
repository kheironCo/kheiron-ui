import { ReactNode } from 'react';

export type BorderStyleType = 'none' | 'solid' | 'dashed' | 'dotted';

export type TagKUIProps = {
  label: ReactNode;
  color?: string;
  borderStyle?: BorderStyleType;
  borderColor?: string;
  borderWidth?: string;
  bgcolor?: string;
};
