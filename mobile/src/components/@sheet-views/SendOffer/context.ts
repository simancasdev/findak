import {Context} from "./types";
import {SearchModel} from "src/interfaces";
import {createContext, useContext} from "react";

export const SendOfferContext = createContext<Context>({
  search: {} as SearchModel,
});

export const useSendOffer = () => {
  const values = useContext(SendOfferContext);
  if (!values) {
    throw new Error(
      "You need a SendOfferContext Provider to call `useSendOffer`"
    );
  }

  return values;
};
