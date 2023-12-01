import {CSSProperties} from "react";

type StringSize = `${string}${"rem" | "em" | "px"}`;

export interface Style {
  style?: CSSProperties;
  gap?: number | StringSize;
  marginTop?: number | StringSize;
  marginBottom?: number | StringSize;
}

export type Alignment =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | undefined;

export type FontWeight =
  | "normal"
  | "bold"
  | "100"
  | "200"
  | "400"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | undefined;
