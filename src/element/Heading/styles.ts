// import { blinkerFont } from '../../common/styles';
import { css } from '@emotion/react';

type WeightType =
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 'bold'
  | 'bolder'
  | 'light'
  | 'lighter'
  | 'normal'
  | string;

export type HeadingStyleProps = {
  weight?: WeightType;
};

export const HeadingStyle = ({ weight = 'normal' }: HeadingStyleProps) => css`
  padding: 0;
  margin: 0;
  align-content: center;
  font-family: 'Blinker', sans-serif;
  font-weight: ${weight};
`;
