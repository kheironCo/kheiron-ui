import { css } from '@emotion/react';

import { PositionStyleType } from './types';

export const PositionStyle: PositionStyleType = {
  top: css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  bottom: css`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  `,
  left: css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
  right: css`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  `,
};
