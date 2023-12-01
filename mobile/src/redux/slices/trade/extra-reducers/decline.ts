import {TradeSlice} from "../types";
import {declineTrade} from "../thunks";
import {ActionReducerMapBuilder, current} from "@reduxjs/toolkit";

export const DECLINE_TRADE_REDUCER = (
  builder: ActionReducerMapBuilder<TradeSlice>
) => {
  builder.addCase(declineTrade.fulfilled, (state, action) => {
    const trade = action.payload;
    if (typeof trade === "undefined") return;

    const {trades} = current(state);
    const {inProgress} = trades;

    state["trade"] = trade;
    state["trades"]["inProgress"] = inProgress.filter(
      (prevTrade) => prevTrade["id"] !== trade["id"]
    );
  });
};
