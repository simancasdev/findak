import {SvgProps} from "../interfaces";
import {Line, Svg} from "react-native-svg";

export const Menu = ({size = 16, color, strokeWidth = 2}: SvgProps) => (
  <Svg
    width={size}
    height={size}
    stroke={color}
    viewBox="0 0 24 24"
    fill="black"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <Line x1="3" y1="12" x2="21" y2="12"></Line>
    <Line x1="3" y1="6" x2="21" y2="6"></Line>
    <Line x1="3" y1="18" x2="21" y2="18"></Line>
  </Svg>
);
