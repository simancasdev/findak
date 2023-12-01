import {PALETTE} from "styles";
import {LoaderStyled} from "./styles";

interface LoaderProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export const Loader: React.FC<LoaderProps> = ({
  size = 50,
  strokeWidth = 6,
  color = PALETTE["PRIMARY"],
}) => {
  const circles = [1, 2, 3, 4];

  return (
    <LoaderStyled
      style={{
        width: size,
        height: size,
      }}
    >
      {circles.map((key) => (
        <div
          key={key}
          style={{
            width: size,
            height: size,
            border: `${strokeWidth}px solid ${color}`,
            borderColor: `${color} transparent transparent transparent`,
          }}
        />
      ))}
    </LoaderStyled>
  );
};
