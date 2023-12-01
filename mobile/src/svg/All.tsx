import {PALETTE} from "../styles";
import {SvgProps} from "../interfaces";
import {Path, Svg} from "react-native-svg";

export const All = ({color = PALETTE["BLACK"], size = 24}: SvgProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path fill={color} d="M3 2h18v2H3zm0 18h18v2H3zm0-6h18v2H3zm0-6h18v2H3z" />
  </Svg>
);
