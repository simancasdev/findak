import {PALETTE} from "../styles";
import {SvgProps} from "../interfaces";
import {Circle, Path, Svg} from "react-native-svg";

export const Inventory = ({
  size = 24,
  strokeWidth,
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
    <Circle cx="9" cy="21" r="1"></Circle>
    <Circle cx="20" cy="21" r="1"></Circle>
    <Path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></Path>
  </Svg>
);
