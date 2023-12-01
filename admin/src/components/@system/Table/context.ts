import {createContext, useContext} from "react";
import {TableProps} from ".";

interface TableContext extends Omit<TableProps, "style"> {
  defaultColumns: string;
}

export const TableContext = createContext<TableContext>({
  heads: [],
  children: [],
  defaultColumns: "",
  gridTemplateColumns: "",
});

export const useTable = () => useContext(TableContext);
