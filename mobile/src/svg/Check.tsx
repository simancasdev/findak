import {PALETTE} from "../styles";
import {SvgProps} from "../interfaces";
import {Polyline, Svg} from "react-native-svg";

export const Check = ({
  size = 24,
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
    <Polyline points="20 6 9 17 4 12"></Polyline>
  </Svg>
);
