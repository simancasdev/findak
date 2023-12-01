import {PALETTE} from "../styles";
import {SvgProps} from "../interfaces";
import {Path, Svg} from "react-native-svg";

export const Product = ({color = PALETTE["BLACK"], size = 20}: SvgProps) => (
  <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <Path
      d="M13.3333 1.33333H2.66666C1.99999 1.33333 1.33333 1.93333 1.33333 2.66666V4.67333C1.33333 5.15333 1.61999 5.56666 1.99999 5.79999V13.3333C1.99999 14.0667 2.73333 14.6667 3.33333 14.6667H12.6667C13.2667 14.6667 14 14.0667 14 13.3333V5.79999C14.38 5.56666 14.6667 5.15333 14.6667 4.67333V2.66666C14.6667 1.93333 14 1.33333 13.3333 1.33333ZM12.6667 13.3333H3.33333V6H12.6667V13.3333ZM13.3333 4.66666H2.66666V2.66666H13.3333V4.66666Z"
      fill={color}
    />
    <Path d="M6 8H10V9.33333H6V8Z" fill={color} />
  </Svg>
);
