import {SvgProps} from "@/interfaces";
import {PALETTE} from "@/styles/palette";

export const Send = ({color = PALETTE["WHITE"], size = 20}: SvgProps) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path
      d="M2.67333 4.02L7.68 6.16667L2.66667 5.5L2.67333 4.02ZM7.67333 9.83333L2.66667 11.98V10.5L7.67333 9.83333ZM1.34 2L1.33333 6.66667L11.3333 8L1.33333 9.33333L1.34 14L15.3333 8L1.34 2Z"
      fill={color}
    />
  </svg>
);
