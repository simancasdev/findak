import {PALETTE} from "../styles";
import {SvgProps} from "../interfaces";
import {ClipPath, Defs, G, Path, Rect, Svg} from "react-native-svg";

export const Tag = ({size = 20, color = PALETTE["BLACK"]}: SvgProps) => (
  <Svg width={size} height={size} viewBox="0 0 12 12" fill="none">
    <G clip-path="url(#clip0_21_47)">
      <Path
        d="M10.295 6.705L6.71 10.29C6.61713 10.383 6.50684 10.4567 6.38544 10.5071C6.26404 10.5574 6.13392 10.5833 6.0025 10.5833C5.87109 10.5833 5.74096 10.5574 5.61956 10.5071C5.49816 10.4567 5.38787 10.383 5.295 10.29L1 6V1H6L10.295 5.295C10.4813 5.48236 10.5858 5.73581 10.5858 6C10.5858 6.26419 10.4813 6.51764 10.295 6.705Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.5 3.5H3.50701"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_21_47">
        <Rect width="12" height="12" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
