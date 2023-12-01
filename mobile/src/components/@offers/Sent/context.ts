import {Context} from "./types";
import {OfferModel} from "src/interfaces";
import {createContext, useContext} from "react";

export const SentContext = createContext<Context>({
  offer: {} as OfferModel,
});

export const useSent = () => {
  const values = useContext(SentContext);
  if (!values) {
    throw new Error("You need a SentContext Provider to call `useSent`");
  }

  return values;
};
