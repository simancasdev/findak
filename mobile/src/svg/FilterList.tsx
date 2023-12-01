import {PALETTE} from "../styles";
import {SvgProps} from "../interfaces";
import {Path, Svg} from "react-native-svg";

export const FilterList = ({
  strokeWidth = 1,
  color = PALETTE["BLACK"],
  size = 24,
}: SvgProps) => (
  <Svg
    fill={color}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    strokeWidth={strokeWidth}
  >
    <Path d="M9 18h12v-2H9v2zM3 6v2h18V6H3zm6 7h12v-2H9v2z"></Path>
  </Svg>
);
