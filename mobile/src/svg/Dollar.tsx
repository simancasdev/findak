import {PALETTE} from "../styles";
import {SvgProps} from "../interfaces";
import {Line, Path, Svg} from "react-native-svg";

export const Dollar = ({
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
    <Line x1="12" y1="1" x2="12" y2="23"></Line>
    <Path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></Path>
  </Svg>
);
