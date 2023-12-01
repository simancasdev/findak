import {PALETTE} from "../styles";
import {SvgProps} from "../interfaces";
import {Line, Rect, Svg} from "react-native-svg";

export const Calendar = ({
  color = PALETTE["BLACK"],
  size = 24,
  strokeWidth = 2,
}: SvgProps) => (
  <Svg
    fill="none"
    width={size}
    height={size}
    stroke={color}
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
  >
    <Rect x="3" y="4" width="18" height="18" rx="2" ry="2"></Rect>
    <Line x1="16" y1="2" x2="16" y2="6"></Line>
    <Line x1="8" y1="2" x2="8" y2="6"></Line>
    <Line x1="3" y1="10" x2="21" y2="10"></Line>
  </Svg>
);
