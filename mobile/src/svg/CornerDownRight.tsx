import {PALETTE} from "src/styles";
import {SvgProps} from "../interfaces";
import {Path, Polyline, Svg} from "react-native-svg";

export const CornerDownRight = ({
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
    <Polyline points="15 10 20 15 15 20"></Polyline>
    <Path d="M4 4v7a4 4 0 0 0 4 4h12"></Path>
  </Svg>
);
