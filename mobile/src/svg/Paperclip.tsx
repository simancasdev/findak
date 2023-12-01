import {SvgProps} from "../interfaces";
import {ClipPath, Defs, G, Path, Rect, Svg} from "react-native-svg";

export const Paperclip = ({size = 16, color}: SvgProps) => (
  <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <G clip-path="url(#clip0_22_240)">
      <Path
        d="M14.2933 7.36665L8.16667 13.4933C7.4161 14.2439 6.39812 14.6655 5.33667 14.6655C4.27521 14.6655 3.25723 14.2439 2.50667 13.4933C1.7561 12.7428 1.33444 11.7248 1.33444 10.6633C1.33444 9.60187 1.7561 8.58388 2.50667 7.83332L8.63333 1.70665C9.13371 1.20628 9.81236 0.925171 10.52 0.925171C11.2276 0.925171 11.9063 1.20628 12.4067 1.70665C12.907 2.20703 13.1881 2.88568 13.1881 3.59332C13.1881 4.30096 12.907 4.97961 12.4067 5.47999L6.27333 11.6067C6.02315 11.8568 5.68382 11.9974 5.33 11.9974C4.97618 11.9974 4.63685 11.8568 4.38667 11.6067C4.13648 11.3565 3.99592 11.0171 3.99592 10.6633C3.99592 10.3095 4.13648 9.97018 4.38667 9.71999L10.0467 4.06665"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_22_240">
        <Rect width={size} height={size} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
