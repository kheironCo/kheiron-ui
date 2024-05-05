import { ReactElement } from "react";
import { AtomDiv, AtomLabel } from "../../element";
import { css } from "@emotion/react";
import { left, top, right, bottom } from "./styles";


type PositionType = "top" | "bottom" | "left" | "right";
type AlignType = "left" | "center" | "right";

export type LabelProps = {
  label: string; 
  position?: PositionType;
  align?: AlignType;
  htmlFor?: string;
  children: ReactElement;
};

export const LabelKUI = ({position="top", align="left", htmlFor, children, label}: LabelProps) => {
  return (
    <AtomDiv css={(position == "top" && css(top))|| (position == "bottom" && css(bottom)) || (position == "left" && css(left))|| (position == "right" && css(right))}>
      <AtomLabel>{label}</AtomLabel>
      
      {children}
    </AtomDiv>
  );
};