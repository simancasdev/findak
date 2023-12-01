import {Context} from "./types";
import {TradeModel} from "../../../interfaces";
import {createContext, useContext} from "react";

export const TradeContext = createContext<Context>({
  trade: {} as TradeModel,
});

export const useTrade = () => {
  const values = useContext(TradeContext);
  if (!values)
    throw new Error("You need a TradeContext Provider to call `useTrade`");

  return values;
};
