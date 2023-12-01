import {APIStatus, TradeModel} from "src/interfaces";

export interface TradeSlice {
  trade: TradeModel;
  trades: {
    inProgress: TradeModel[];
    completed: TradeModel[];
    rejected: TradeModel[];
  };
  APIStatus: {
    trade: APIStatus;
    trades: APIStatus;
  };
}
