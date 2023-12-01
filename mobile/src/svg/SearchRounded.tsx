import {PALETTE} from "../styles";
import {SvgProps} from "../interfaces";
import {Circle, Line, Svg} from "react-native-svg";

export const SearchRounded = ({
  color = PALETTE["BLACK"],
  size = 16,
  strokeWidth,
}: SvgProps) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <Circle cx="11" cy="11" r="8"></Circle>
    <Line x1="21" y1="21" x2="16.65" y2="16.65"></Line>
  </Svg>
);
