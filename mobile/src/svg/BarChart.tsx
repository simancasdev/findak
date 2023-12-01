import {PALETTE} from "../styles";
import {SvgProps} from "../interfaces";
import {Line, Svg} from "react-native-svg";

export const BarChart = ({
  color = PALETTE["BLACK"],
  size = 24,
  strokeWidth,
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
    <Line x1="18" y1="20" x2="18" y2="10"></Line>
    <Line x1="12" y1="20" x2="12" y2="4"></Line>
    <Line x1="6" y1="20" x2="6" y2="14"></Line>
  </Svg>
);
