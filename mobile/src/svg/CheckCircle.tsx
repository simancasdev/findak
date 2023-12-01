import {PALETTE} from "../styles";
import {SvgProps} from "../interfaces";
import {Path, Polyline, Svg} from "react-native-svg";

export const CheckCircle = ({
  color = PALETTE["BLACK"],
  size = 24,
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
    <Path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></Path>
    <Polyline points="22 4 12 14.01 9 11.01"></Polyline>
  </Svg>
);
