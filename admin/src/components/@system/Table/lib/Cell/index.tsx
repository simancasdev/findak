import clsx from "clsx";
import {Style} from "interfaces";
import {CellStyled} from "./styles";
import {Typography} from "components/@system/Typography";

interface CellProps extends Style {
  variant?: "row-child" | "head-child";
  children: (string | JSX.Element | JSX.Element)[] | JSX.Element | string;
}

export const Cell: React.FC<CellProps> = ({
  gap,
  style,
  children,
  variant = "row-child",
}) => {
  return (
    <CellStyled
      className={clsx(variant)}
      style={{overflow: "hidden", gap, ...style}}
    >
      {typeof children === "string" ? (
        <Typography style={{textOverflow: "ellipsis", overflow: "hidden"}}>
          {children}
        </Typography>
      ) : (
        children
      )}
    </CellStyled>
  );
};
