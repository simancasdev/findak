import {TradeSlice} from "./types";
import {SET_API_STATUS} from "../status.api";
import {INITIAL_TRADE} from "src/redux/initial-states";

export const initialState: TradeSlice = {
  trade: INITIAL_TRADE,
  trades: {
    inProgress: [],
    completed: [],
    rejected: [],
  },
  APIStatus: {
    trade: SET_API_STATUS("initial"),
    trades: SET_API_STATUS("initial"),
  },
};
