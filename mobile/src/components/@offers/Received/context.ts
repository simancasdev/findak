import {Context} from "./types";
import {OfferModel} from "src/interfaces";
import {createContext, useContext} from "react";

export const ReceivedContext = createContext<Context>({
  offer: {} as OfferModel,
});

export const useReceived = () => {
  const values = useContext(ReceivedContext);
  if (!values) {
    throw new Error(
      "You need a ReceivedContext Provider to call `useReceived`"
    );
  }

  return values;
};
