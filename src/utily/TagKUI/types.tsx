import { AtomDiv } from "../../element";
import { SerializedStyles } from "@emotion/react";

export type ColorType = 'main' | 'blue' | 'yellow' | 'red' | 'black' | 'white';
export type borderType = 'none'| 'solid' | 'dashed' | 'dotted' ;

export type StyledType = Record<ColorType, SerializedStyles> 
export type StyledType2 = Record<borderType, SerializedStyles> 

export type TagKUIProps = Parameters<typeof AtomDiv>[0] & {
  label: string;
  color?: ColorType;
  border?: borderType;
}
