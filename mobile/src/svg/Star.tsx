import {PALETTE} from "../styles";
import {SvgProps} from "../interfaces";
import {Polygon, Svg} from "react-native-svg";

export const Star = ({
  size = 24,
  strokeWidth = 2,
  color = PALETTE["BLACK"],
  fill = PALETTE["TRANSPARENT"],
}: SvgProps) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <Polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </Svg>
);
