import {PALETTE} from "../styles";
import {SvgProps} from "../interfaces";
import {Circle, Line, Path, Svg} from "react-native-svg";

export const Globe = ({
  size = 16,
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
    <Circle cx="12" cy="12" r="10"></Circle>
    <Line x1="2" y1="12" x2="22" y2="12"></Line>
    <Path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></Path>
  </Svg>
);
