import {RowStyled} from "./styles";

interface RowProps {
  alignItems?: Alignment;
  padding?: string | number;
  justifyContent?: Alignment;
  children: any;
  gap?: `${number}${"rem" | "px" | "%" | "em"}` | number;
}

export const Row: React.FC<RowProps> = ({
  padding,
  children,
  gap = "5px",
  alignItems = "center",
  justifyContent = "flex-start",
}) => {
  return (
    <RowStyled style={{justifyContent, gap, alignItems, padding}}>
      {children}
    </RowStyled>
  );
};
