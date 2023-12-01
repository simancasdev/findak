import {PALETTE} from "../styles";
import {SvgProps} from "../interfaces";
import {Path, Svg} from "react-native-svg";

export const Edit = ({
  size = 24,
  color = PALETTE["BLACK"],
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
    <Path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
  </Svg>
);
