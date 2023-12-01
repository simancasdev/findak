import {PALETTE} from "../styles";
import {SvgProps} from "../interfaces";

export const Home = ({
  size = 18,
  strokeWidth = 2,
  color = PALETTE["BLACK"],
}: SvgProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    />
    <path
      stroke={color}
      d="M9 17V12H15"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    />
  </svg>
);

export const Category = ({
  size = 18,
  strokeWidth = 2,
  color = PALETTE["BLACK"],
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
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <path d="M16 10a4 4 0 0 1-8 0"></path>
  </svg>
);

export const Location = ({
  size = 18,
  strokeWidth = 2,
  color = PALETTE["BLACK"],
}: SvgProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth}>
    <path
      fill={color}
      strokeWidth={strokeWidth}
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-.61.08-1.21.21-1.78L8.99 15v1c0 1.1.9 2 2 2v1.93C7.06 19.43 4 16.07 4 12zm13.89 5.4c-.26-.81-1-1.4-1.9-1.4h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41C17.92 5.77 20 8.65 20 12c0 2.08-.81 3.98-2.11 5.4z"
    ></path>
  </svg>
);

export const Users = ({
  size = 18,
  strokeWidth = 2,
  color = PALETTE["BLACK"],
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
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);
