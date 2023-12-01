import {PALETTE} from "../styles";
import {SvgProps} from "../interfaces";
import {Line, Svg} from "react-native-svg";

export const X = ({
  size = 24,
  color = PALETTE["BLACK"],
  strokeWidth = 2,
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
    <Line x1="18" y1="6" x2="6" y2="18"></Line>
    <Line x1="6" y1="6" x2="18" y2="18"></Line>
  </Svg>
);
