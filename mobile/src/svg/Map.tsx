import {PALETTE} from "../styles";
import {SvgProps} from "../interfaces";
import {ClipPath, Defs, G, Path, Rect, Svg} from "react-native-svg";

export const Map = ({
  size = 22,
  strokeWidth = 2,
  color = PALETTE["WHITE"],
}: SvgProps) => (
  <Svg width={size} height={size} viewBox="0 0 22 22" fill="none">
    <G clipPath="url(#clip0_11_40)">
      <Path
        d="M19.25 9.16669C19.25 15.5834 11 21.0834 11 21.0834C11 21.0834 2.75 15.5834 2.75 9.16669C2.75 6.97865 3.61919 4.88023 5.16637 3.33306C6.71354 1.78588 8.81196 0.916687 11 0.916687C13.188 0.916687 15.2865 1.78588 16.8336 3.33306C18.3808 4.88023 19.25 6.97865 19.25 9.16669Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11 11.9167C12.5188 11.9167 13.75 10.6855 13.75 9.16669C13.75 7.6479 12.5188 6.41669 11 6.41669C9.48122 6.41669 8.25 7.6479 8.25 9.16669C8.25 10.6855 9.48122 11.9167 11 11.9167Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_11_40">
        <Rect width="22" height="22" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
