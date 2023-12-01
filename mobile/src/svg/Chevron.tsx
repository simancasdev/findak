import {PALETTE} from "../styles";
import {SvgProps} from "../interfaces";
import {Polyline, Svg} from "react-native-svg";

export const ChevronDown = ({
  size = 24,
  color = PALETTE["BLACK"],
  strokeWidth = 2.5,
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
    <Polyline points="6 9 12 15 18 9"></Polyline>
  </Svg>
);

export const ChevronLeft = ({
  size = 24,
  color = PALETTE["BLACK"],
  strokeWidth = 2.5,
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
    <Polyline points="15 18 9 12 15 6"></Polyline>
  </Svg>
);

export const ChevronRight = ({
  size = 24,
  color = PALETTE["BLACK"],
  strokeWidth = 2.5,
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
    <Polyline points="9 18 15 12 9 6"></Polyline>
  </Svg>
);

export const ChevronUp = ({
  size = 24,
  color = PALETTE["BLACK"],
  strokeWidth = 2.5,
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
    <Polyline points="18 15 12 9 6 15" />
  </Svg>
);
