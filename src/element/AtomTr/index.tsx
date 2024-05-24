import { Interpolation, Theme } from '@emotion/react';
import { HTMLAttributes } from 'react';

export type AtomTrProps = HTMLAttributes<HTMLTableRowElement> & {
  css?: Interpolation<Theme>;
};

export interface AtomTrElement extends JSX.Element {}

export const AtomTr = ({ children, className, ...rest }: AtomTrProps) =>
  (
    <tr className={`KUI-atom-element-tr ${className || ''}`} {...rest}>
      {children}
    </tr>
  ) as AtomTrElement;
