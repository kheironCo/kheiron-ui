import { ReactElement } from "react";
import { AtomDiv, AtomLabel } from "../../element";
import { AlinearLeft, AlinearCenter, AlinearRight, PositionTop, PositionBottom, PositionLeft, PositionRight} from "./styles";


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
      <AtomDiv >
        <AtomDiv css={((position == "top") && PositionTop) ||((position == "bottom") && PositionBottom) || ((position == "left") && PositionLeft) || ((position == "right") && PositionRight)}>
          <AtomLabel css={((align == "left") && AlinearLeft)||((align == "center") && AlinearCenter) || ((align == "right") && AlinearRight) } htmlFor={htmlFor} >{label}</AtomLabel>
          {children}
        </AtomDiv>
      </AtomDiv>
  )
};