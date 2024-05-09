import { css } from '@emotion/react';

import { PositionStyleType } from './types';

export const PositionStyle: PositionStyleType = {
  top: css`
    display: flex;
    flex-direction: column;
  `,
  bottom: css`
    display: flex;
    flex-direction: column-reverse;
  `,
  left: css`
    display: flex;
    flex-direction: row;
  `,
  right: css`
    display: flex;
    flex-direction: row-reverse;
  `,
};