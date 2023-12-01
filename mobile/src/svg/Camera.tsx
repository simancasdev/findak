import {PALETTE} from "../styles";
import {SvgProps} from "../interfaces";
import {Circle, Path, Svg} from "react-native-svg";

export const Camera = ({size = 24, color = PALETTE["BLACK"]}: SvgProps) => (
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
    <Path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></Path>
    <Circle cx="12" cy="13" r="4"></Circle>
  </Svg>
);
