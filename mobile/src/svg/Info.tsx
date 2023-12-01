import {PALETTE} from "../styles";
import {SvgProps} from "../interfaces";
import {Circle, Line, Svg} from "react-native-svg";

export const Info = ({color = PALETTE["BLACK"], size = 24}: SvgProps) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <Circle cx="12" cy="12" r="10"></Circle>
    <Line x1="12" y1="16" x2="12" y2="12"></Line>
    <Line x1="12" y1="8" x2="12.01" y2="8"></Line>
  </Svg>
);
