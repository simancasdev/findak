import {PALETTE} from "../styles";
import {SvgProps} from "../interfaces";
import {Path, Polyline, Svg} from "react-native-svg";

export const Trash = ({
  size = 24,
  strokeWidth = 2,
  color = PALETTE["BLACK"],
}: SvgProps) => (
  <Svg
    fill="none"
    width={size}
    height={size}
    stroke={color}
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
  >
    <Polyline points="3 6 5 6 21 6"></Polyline>
    <Path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></Path>
  </Svg>
);
