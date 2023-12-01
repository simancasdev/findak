import {TValue} from "src/languages";
import {TradeStatus} from "src/interfaces";

export const STATUS_LABEL: {
  [S in Exclude<TradeStatus, "in_progress">]: TValue;
} = {
  rejected: "trade_rejected",
  completed: "trade_completed",
};
