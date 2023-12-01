import {PALETTE} from "../styles";
import {SvgProps} from "../interfaces";
import {ClipPath, Defs, G, Path, Rect, Svg} from "react-native-svg";

export const Eye = ({
  size = 16,
  strokeWidth = 1.5,
  color = PALETTE["BLACK"],
}: SvgProps) => (
  <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <G clip-path="url(#clip0_26_1330)">
      <Path
        d="M0.666672 7.99996C0.666672 7.99996 3.33334 2.66663 8.00001 2.66663C12.6667 2.66663 15.3333 7.99996 15.3333 7.99996C15.3333 7.99996 12.6667 13.3333 8.00001 13.3333C3.33334 13.3333 0.666672 7.99996 0.666672 7.99996Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_26_1330">
        <Rect width={size} height={size} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
