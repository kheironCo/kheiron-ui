import { SerializedStyles } from "@emotion/react";

export type PositionType = "top" | "bottom" | "left" | "right";
export type AlignType = "left" | "center" | "right";

export type PositionStyleType = Record<PositionType, SerializedStyles>
export type AlignStyleType = Record<AlignType, SerializedStyles>