import {PALETTE} from "../styles";
import {SvgProps} from "../interfaces";
import {Line, Path, Svg} from "react-native-svg";

export const CategoryPlaceholder = ({
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
    <Path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></Path>
    <Line x1="3" y1="6" x2="21" y2="6"></Line>
    <Path d="M16 10a4 4 0 0 1-8 0"></Path>
  </Svg>
);
