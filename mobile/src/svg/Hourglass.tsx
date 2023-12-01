import {PALETTE} from "../styles";
import {SvgProps} from "../interfaces";
import {Path, Svg} from "react-native-svg";

export const Hourglass = ({size = 20, color = PALETTE["BLACK"]}: SvgProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path
      fill={color}
      d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5-4-4V4h8v3.5l-4 4z"
    />
  </Svg>
);
