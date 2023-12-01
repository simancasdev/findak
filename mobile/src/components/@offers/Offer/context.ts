import {Context} from "./types";
import {OfferModel} from "src/interfaces";
import {createContext, useContext} from "react";

export const OfferContext = createContext<Context>({
  offer: {} as OfferModel,
  variant: "search_detail",
});

export const useOffer = () => {
  const values = useContext(OfferContext);
  if (!values) {
    throw new Error("You need a OfferContext Provider to call `useOffer`");
  }

  return values;
};
