import {Style} from "./components";

export interface SvgProps extends Style {
  size?: number;
  fill?: string;
  color?: string;
  width?: number;
  height?: number;
  strokeWidth?: number;
  highlighted?: boolean;
}
