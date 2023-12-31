import {PALETTE} from "src/styles";
import {SvgProps} from "../interfaces";
import {Path, Polyline, Svg} from "react-native-svg";

export const CornerUpRight = ({
  size = 24,
  color = PALETTE["BLACK"],
}: SvgProps) => (
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
    <Polyline points="15 14 20 9 15 4"></Polyline>
    <Path d="M4 20v-7a4 4 0 0 1 4-4h12"></Path>
  </Svg>
);
