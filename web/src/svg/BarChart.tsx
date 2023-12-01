import {SvgProps} from "@/interfaces";
import {PALETTE} from "@/styles/palette";

export const BarChart = ({
  color = PALETTE["WHITE"],
  size = 20,
  strokeWidth = 3,
}: SvgProps) => (
  <svg
    fill="none"
    width={size}
    height={size}
    stroke={color}
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
  >
    <line x1="18" y1="20" x2="18" y2="10"></line>
    <line x1="12" y1="20" x2="12" y2="4"></line>
    <line x1="6" y1="20" x2="6" y2="14"></line>
  </svg>
);
