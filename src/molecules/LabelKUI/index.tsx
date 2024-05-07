import { ReactElement } from "react";
import { AtomDiv, AtomLabel } from "../../element";
import { PositionStyle, AlignStyle} from "./styles";
import {PositionType, AlignType} from "./types"



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
        <AtomDiv css={ PositionStyle[ position ]}>
          <AtomLabel css={ AlignStyle[ align ]} htmlFor={htmlFor} >{label}</AtomLabel>
          {children}
        </AtomDiv>
      </AtomDiv>
  )
};