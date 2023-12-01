import {PALETTE} from "src/styles";
import {SvgProps} from "src/interfaces";
import {Path, Svg} from "react-native-svg";

export const Down = ({color = PALETTE["BLACK04"]}: SvgProps) => (
  <Svg width="18" height="8" viewBox="0 0 11 6" fill="none">
    <Path
      d="M1 1L5.5 5L10 1"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const Up = ({color = PALETTE["BLACK04"]}: SvgProps) => (
  <Svg width="18" height="8" viewBox="0 0 11 6" fill="none">
    <Path
      d="M10 5L5.5 1L1 5"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
