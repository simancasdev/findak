import {PALETTE} from "../styles";
import {SvgProps} from "../interfaces";
import {Circle, Path, Svg} from "react-native-svg";

export const User = ({
  size = 25,
  strokeWidth = 2,
  color = PALETTE["BLACK"],
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
    <Path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <Circle cx="12" cy="7" r="4" />
  </Svg>
);
