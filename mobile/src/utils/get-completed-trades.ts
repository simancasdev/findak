import {TradeModel} from "../interfaces";

export const getCompletedTrades = (trades: TradeModel[] = []): number => {
  return trades.filter((trade) => trade.status === "completed").length;
};
