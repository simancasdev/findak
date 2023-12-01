import {PALETTE} from "../styles";
import {SvgProps} from "../interfaces";
import {Circle, Path, Svg} from "react-native-svg";

export const Users = ({
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
    <Path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></Path>
    <Circle cx="9" cy="7" r="4"></Circle>
    <Path d="M23 21v-2a4 4 0 0 0-3-3.87"></Path>
    <Path d="M16 3.13a4 4 0 0 1 0 7.75"></Path>
  </Svg>
);
