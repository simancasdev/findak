import {TradeSlice} from "../types";
import {approveTrade} from "../thunks";
import {ActionReducerMapBuilder} from "@reduxjs/toolkit";

export const APPROVE_TRADE_REDUCER = (
  builder: ActionReducerMapBuilder<TradeSlice>
) => {
  builder.addCase(approveTrade.fulfilled, (state, action) => {
    const trade = action.payload;
    if (typeof trade === "undefined") return;
    state["trade"] = trade;
  });
};
