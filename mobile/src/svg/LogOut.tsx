import {PALETTE} from "../styles";
import {SvgProps} from "../interfaces";
import {Line, Path, Polyline, Svg} from "react-native-svg";

export const LogOut = ({
  size = 22,
  strokeWidth = 2,
  color = PALETTE["WHITE"],
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
    <Path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></Path>
    <Polyline points="16 17 21 12 16 7"></Polyline>
    <Line x1="21" y1="12" x2="9" y2="12"></Line>
  </Svg>
);
