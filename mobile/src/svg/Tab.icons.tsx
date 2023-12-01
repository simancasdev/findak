import {PALETTE} from "../styles";
import {SvgProps} from "../interfaces";
import {Path, Svg} from "react-native-svg";

export const Explore = ({
  color = PALETTE["BLACK"],
  size = 30,
  strokeWidth = 1.5,
}: SvgProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      strokeWidth={strokeWidth}
      d="M19.3 16.9C19.7 16.2 20 15.4 20 14.5C20 12 18 10 15.5 10C13 10 11 12 11 14.5C11 17 13 19 15.5 19C16.4 19 17.2 18.7 17.9 18.3L21.1 21.5L22.5 20.1L19.3 16.9ZM15.5 17C14.1 17 13 15.9 13 14.5C13 13.1 14.1 12 15.5 12C16.9 12 18 13.1 18 14.5C18 15.9 16.9 17 15.5 17ZM12 20V22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C16.84 2 20.87 5.44 21.8 10H19.73C19.09 7.54 17.33 5.53 15 4.59V5C15 6.1 14.1 7 13 7H11V9C11 9.55 10.55 10 10 10H8V12H10V15H9L4.21 10.21C4.08 10.79 4 11.38 4 12C4 16.41 7.59 20 12 20Z"
      fill={color}
    />
  </Svg>
);

export const Inbox = ({
  color = PALETTE["BLACK"],
  size = 30,
  strokeWidth = 1.5,
}: SvgProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M18 12H14.4L13.2 15.6H10.8L9.6 12H6"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5.45 5.11L2 12V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V12L18.55 5.11C18.3844 4.77679 18.1292 4.49637 17.813 4.30028C17.4967 4.10419 17.1321 4.0002 16.76 4H7.24C6.86792 4.0002 6.50326 4.10419 6.18705 4.30028C5.87083 4.49637 5.61558 4.77679 5.45 5.11Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const Sent = ({
  color = PALETTE["BLACK"],
  size = 30,
  strokeWidth = 1.5,
}: SvgProps) => (
  <Svg width={size} height={size} viewBox="0 0 22 22" fill="none">
    <Path
      d="M21 1L14 21L10 12L1 8L21 1Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const Trades = ({
  color = PALETTE["BLACK"],
  size = 30,
  strokeWidth = 1.5,
}: SvgProps) => (
  <Svg
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    strokeWidth={strokeWidth}
  >
    <Path
      d="M12.22 19.85C12.04 20.03 11.72 20.06 11.51 19.85C11.33 19.67 11.3 19.35 11.51 19.14L14.9 15.75L13.49 14.34L10.1 17.73C9.90997 17.93 9.58997 17.92 9.38997 17.73C9.17997 17.52 9.20997 17.2 9.38997 17.02L12.78 13.63L11.37 12.22L7.97997 15.61C7.79997 15.79 7.47997 15.82 7.26997 15.61C7.07997 15.42 7.07997 15.1 7.26997 14.9L10.66 11.51L9.23997 10.1L5.84997 13.49C5.66997 13.67 5.34997 13.7 5.13997 13.49C4.94997 13.29 4.94997 12.98 5.13997 12.78L9.51997 8.4L11.39 10.26C12.34 11.21 13.98 11.2 14.93 10.26C15.91 9.28 15.91 7.7 14.93 6.72L13.07 4.86L13.35 4.58C14.13 3.8 15.4 3.8 16.18 4.58L20.42 8.82C21.2 9.6 21.2 10.87 20.42 11.65L12.22 19.85ZM21.83 13.07C23.39 11.51 23.39 8.98 21.83 7.41L17.59 3.17C16.03 1.61 13.5 1.61 11.93 3.17L11.65 3.45L11.37 3.17C9.80997 1.61 7.27997 1.61 5.70997 3.17L2.16997 6.71C0.74997 8.13 0.61997 10.34 1.76997 11.9L3.21997 10.45C2.82997 9.7 2.95997 8.75 3.58997 8.12L7.12997 4.58C7.90997 3.8 9.17997 3.8 9.95997 4.58L13.52 8.14C13.7 8.32 13.73 8.64 13.52 8.85C13.31 9.06 12.99 9.03 12.81 8.85L9.51997 5.57L3.71997 11.36C2.73997 12.33 2.73997 13.92 3.71997 14.9C4.10997 15.29 4.60997 15.53 5.13997 15.6C5.20997 16.12 5.43997 16.62 5.83997 17.02C6.23997 17.42 6.73997 17.65 7.25997 17.72C7.32997 18.24 7.55997 18.74 7.95997 19.14C8.35997 19.54 8.85997 19.77 9.37997 19.84C9.44997 20.38 9.68997 20.87 10.08 21.26C10.55 21.73 11.18 21.99 11.85 21.99C12.52 21.99 13.15 21.73 13.62 21.26L21.83 13.07Z"
      fill={color}
    />
  </Svg>
);

export const Home = ({
  color = PALETTE["BLACK"],
  size = 30,
  strokeWidth = 1.5,
}: SvgProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9 17V12H15"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
