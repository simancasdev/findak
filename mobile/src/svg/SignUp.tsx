import {PALETTE} from "../styles";
import {SvgProps} from "../interfaces";
import {Line, Path, Polyline, Svg} from "react-native-svg";

export const SignUp = ({
  size = 22,
  strokeWidth = 2,
  color = PALETTE["WHITE"],
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
    <Path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
    <Polyline points="10 17 15 12 10 7" />
    <Line x1="15" y1="12" x2="3" y2="12" />
  </Svg>
);
