import { css } from "@emotion/react";

import { PositionStyleType, AlignStyleType } from './types';

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
}
export const AlignStyle: AlignStyleType = {
  center: css`
  text-align: center;
  `,
  left: css`
  text-align: left;
  `,
  right: css`
  text-align: right;
  `,
}


