import {Context} from "./types";
import {SearchModel} from "src/interfaces";
import {createContext, useContext} from "react";

export const SearchAlertContext = createContext<Context>({
  search: {} as SearchModel,
  onPress: () => {},
});

export const useSearchAlert = () => {
  const values = useContext(SearchAlertContext);
  if (!values) {
    throw new Error(
      "You need a SearchAlertContext Provider to call `useSearchAlert`"
    );
  }

  return values;
};
