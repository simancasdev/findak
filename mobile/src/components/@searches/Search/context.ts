import {Context} from "./types";
import {SearchModel} from "src/interfaces";
import {createContext, useContext} from "react";

export const SearchContext = createContext<Context>({
  search: {} as SearchModel,
  showActions: true,
});

export const useSearch = () => {
  const values = useContext(SearchContext);
  if (!values) {
    throw new Error("You need a SearchContext Provider to call `useSearch`");
  }

  return values;
};
