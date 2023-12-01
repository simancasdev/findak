import {PALETTE} from "../styles";
import {SvgProps} from "../interfaces";
import {Line, Path, Svg} from "react-native-svg";

export const AlertTriangle = ({
  size = 24,
  strokeWidth = 2,
  color = PALETTE["BLACK"],
}: SvgProps) => (
  <Svg
    width={size}
    height={size}
    fill="none"
    stroke={color}
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
  >
    <Path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></Path>
    <Line x1="12" y1="9" x2="12" y2="13"></Line>
    <Line x1="12" y1="17" x2="12.01" y2="17"></Line>
  </Svg>
);
