import {PALETTE} from "../styles";
import {SvgProps} from "../interfaces";
import {Rect, Svg} from "react-native-svg";

export const Grid = ({
  size = 24,
  strokeWidth = 2,
  color = PALETTE["BLACK"],
}: SvgProps) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
  >
    <Rect x="3" y="3" width="7" height="7"></Rect>
    <Rect x="14" y="3" width="7" height="7"></Rect>
    <Rect x="14" y="14" width="7" height="7"></Rect>
    <Rect x="3" y="14" width="7" height="7"></Rect>
  </Svg>
);
