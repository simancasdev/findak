import {Cell} from "./lib";
import {PALETTE} from "styles";
import {TableContext} from "./context";
import {Typography} from "../Typography";
import {TableStyled, Head, Empty} from "./styles";
import {CSSProperties, Fragment, useMemo} from "react";

export interface TableProps {
  style?: CSSProperties;
  title?: string | JSX.Element;
  gridTemplateColumns?: string;
  heads: (string | JSX.Element)[];
  children: JSX.Element[] | JSX.Element;
}

export const Table: React.FC<TableProps> = (props) => {
  const {title, style, heads, children, gridTemplateColumns} = props;
  const defaultColumns = gridTemplateColumns ?? `repeat(${heads.length}, 1fr)`;
  const isEmpty = "length" in children && !children.length;

  const values = useMemo(
    () => ({...props, defaultColumns}),
    // eslint-disable-next-line
    []
  );

  return (
    <TableContext.Provider value={values}>
      <TableStyled style={style}>
        {title ? (
          typeof title === "string" ? (
            <Typography variant="subtitle">{title}</Typography>
          ) : (
            title
          )
        ) : null}
        <Head
          style={{
            gridTemplateColumns: defaultColumns,
            borderBottom: isEmpty
              ? `0.3px solid ${PALETTE["BLACK01"]}`
              : undefined,
          }}
        >
          {heads.map((headChild, key) => (
            <Cell variant="head-child" key={key}>
              {headChild}
            </Cell>
          ))}
        </Head>
        <Fragment>
          {isEmpty ? <Empty>nothing to show</Empty> : children}
        </Fragment>
      </TableStyled>
    </TableContext.Provider>
  );
};

export * from "./lib";
