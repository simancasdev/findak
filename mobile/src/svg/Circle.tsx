import {PALETTE} from "../styles";
import {SvgProps} from "../interfaces";
import {Circle as SvgCircle, Svg} from "react-native-svg";

export const Circle = ({color = PALETTE["BLACK"], size = 24}: SvgProps) => (
  <Svg
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <SvgCircle cx="12" cy="12" r="10"></SvgCircle>
  </Svg>
);
