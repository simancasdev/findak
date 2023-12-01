import {PALETTE} from "../styles";
import {SvgProps} from "../interfaces";
import {Path, Svg} from "react-native-svg";

export const Ads = ({
  size = 24,
  strokeWidth = 2,
  color = PALETTE["BLACK"],
}: SvgProps) => (
  <Svg
    fill={color}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    strokeWidth={strokeWidth}
  >
    <Path d="M9.5 7.5v9l7-4.5z"></Path>
    <Path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14.01H4V5.99h16v12.02z"></Path>
  </Svg>
);
