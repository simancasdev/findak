import clsx from "clsx";
import {TypographyStyled} from "./styles";
import {FontWeight, Style} from "interfaces";

interface TypographyProps extends Style {
  color?: string;
  fontWeight?: FontWeight;
  fontSize?: string | number;
  children: JSX.Element | string | number;
  variant?: "title" | "subtitle" | "regular";
}

export const Typography: React.FC<TypographyProps> = ({
  color,
  style,
  children,
  fontSize,
  marginTop,
  fontWeight,
  marginBottom,
  variant = "regular",
}) => {
  return (
    <TypographyStyled
      style={{color, marginTop, marginBottom, fontSize, fontWeight, ...style}}
      className={clsx(variant)}
    >
      {children}
    </TypographyStyled>
  );
};
