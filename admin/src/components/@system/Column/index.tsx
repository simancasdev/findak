import {ColumnStyled} from "./styles";
import {Style, Children, Alignment} from "interfaces";

interface ColumnProps extends Style, Children {
  alignItems?: Alignment;
  justifyContent?: Alignment;
}

export const Column: React.FC<ColumnProps> = ({
  style,
  gap = 5,
  children,
  marginTop,
  alignItems,
  marginBottom,
  justifyContent,
}) => {
  return (
    <ColumnStyled
      style={{
        gap,
        marginBottom,
        marginTop,
        justifyContent,
        alignItems,
        ...style,
      }}
    >
      {children}
    </ColumnStyled>
  );
};
