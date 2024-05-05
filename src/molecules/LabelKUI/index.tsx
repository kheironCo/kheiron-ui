import { ReactElement } from "react";
import { AtomDiv, AtomLabel } from "../../element";
import { AlinearLeft, AlinearCenter, AlinearRight, Espaciado} from "./styles";


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
    <div css={((align == "left") && AlinearLeft)||((align == "center") && AlinearCenter) || ((align == "right") && AlinearRight)}>
    <div >{
      (position == "top") && 
      <AtomDiv css={Espaciado}>
        <AtomLabel htmlFor={htmlFor} >{label}</AtomLabel><br />
        {children}
      </AtomDiv>
    }
    {
      (position == "bottom") && 
      <AtomDiv css={Espaciado}>
        {children}<br />
        <AtomLabel htmlFor={htmlFor}>{label}</AtomLabel>
      </AtomDiv>
    }
    
    {
      (position == "left") && 
      <AtomDiv css={Espaciado}>
        <AtomLabel htmlFor={htmlFor}>{label}</AtomLabel>
        {children}
      </AtomDiv>
    }
    {
      (position == "right") && 
      <AtomDiv css={Espaciado}>
        {children}
        <AtomLabel htmlFor={htmlFor}>{label}</AtomLabel>
      </AtomDiv>
    }
    </div>
    </div>
  )
};