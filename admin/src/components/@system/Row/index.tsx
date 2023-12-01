import {RowStyled} from "./styles";
import {Style, Children, Alignment} from "interfaces";

interface RowProps extends Style, Children {
  alignItems?: Alignment;
  justifyContent?: Alignment;
}

export const Row: React.FC<RowProps> = ({
  style,
  gap = 5,
  children,
  marginTop,
  marginBottom,
  justifyContent,
  alignItems = "center",
}) => {
  return (
    <RowStyled
      style={{
        gap,
        marginTop,
        alignItems,
        marginBottom,
        justifyContent,
        ...style,
      }}
    >
      {children}
    </RowStyled>
  );
};
