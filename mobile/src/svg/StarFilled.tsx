import {PALETTE} from "../styles";
import {SvgProps} from "../interfaces";
import {Path, Svg} from "react-native-svg";

export const StarFilled = ({
  size = 24,
  strokeWidth = 2,
  color = PALETTE["BLACK"],
}: SvgProps) => (
  <Svg viewBox="0 0 24 24" width={size} height={size}>
    <Path
      strokeWidth={strokeWidth}
      fill={color}
      d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
    ></Path>
  </Svg>
);
