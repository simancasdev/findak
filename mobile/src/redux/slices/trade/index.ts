import {PREFIX} from "./helper";
import {RootState} from "src/interfaces";
import {SET_API_STATUS} from "../status.api";
import {createSlice} from "@reduxjs/toolkit";
import {initialState} from "./initial-state";
import {INITIAL_TRADE} from "src/redux/initial-states";
import {
  TRADE_REDUCER,
  TRADES_REDUCER,
  APPROVE_TRADE_REDUCER,
  DECLINE_TRADE_REDUCER,
} from "./extra-reducers";

export const tradeSlice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {
    onCleanTrade: (state) => {
      state["APIStatus"]["trade"] = SET_API_STATUS("initial");
      state["trade"] = INITIAL_TRADE;
    },
  },
  extraReducers: (builder) => {
    TRADES_REDUCER(builder);
    TRADE_REDUCER(builder);
    APPROVE_TRADE_REDUCER(builder);
    DECLINE_TRADE_REDUCER(builder);
  },
});

export * from "./thunks";
export const {onCleanTrade} = tradeSlice.actions;
export const selectTradeState = (state: RootState) => state.trade;

export default tradeSlice.reducer;
