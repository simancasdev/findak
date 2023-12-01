import {Context} from "./types";
import {SearchModel} from "src/interfaces";
import {createContext, useContext} from "react";

export const SearchPreviewContext = createContext<Context>({
  search: {} as SearchModel,
  onPress: () => {},
});

export const useSearchPreview = () => {
  const values = useContext(SearchPreviewContext);
  if (!values) {
    throw new Error(
      "You need a SearchPreviewContext Provider to call `useSearchPreview`"
    );
  }

  return values;
};
