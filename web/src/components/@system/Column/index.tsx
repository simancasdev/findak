import {ColumnStyled} from "./styles";

interface ColumnProps {
  children: any;
  alignItems?: Alignment;
  padding?: string | number;
  justifyContent?: Alignment;
  gap?: `${number}${"rem" | "px" | "%" | "em"}` | number;
}

export const Column: React.FC<ColumnProps> = ({
  padding,
  children,
  gap = "5px",
  alignItems = "flex-start",
  justifyContent = "flex-start",
}) => {
  return (
    <ColumnStyled style={{justifyContent, gap, alignItems, padding}}>
      {children}
    </ColumnStyled>
  );
};
