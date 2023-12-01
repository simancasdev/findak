import {TypographyStyled} from "./styles";

interface TypographyProps {
  color?: string;
  children: string;
  fontSize?: string | number;
}

export const Typography: React.FC<TypographyProps> = ({
  color,
  children,
  fontSize,
}) => {
  return (
    <TypographyStyled style={{fontSize, color}}>{children}</TypographyStyled>
  );
};
