import {PALETTE} from "../styles";
import {SvgProps} from "../interfaces";
import {Path, Svg} from "react-native-svg";

export const PurchasePath = ({
  color = PALETTE["BLACK"],
  size = 24,
  strokeWidth,
}: SvgProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path
      strokeWidth={strokeWidth}
      fill={color}
      d="M12.34 6V4H18v5.66h-2V7.41l-5 5V20H9v-7.58c0-.53.21-1.04.59-1.41l5-5h-2.25z"
    ></Path>
  </Svg>
);
