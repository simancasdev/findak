import {getTrade} from "../thunks";
import {TradeSlice} from "../types";
import {SET_API_STATUS} from "../../status.api";
import {ActionReducerMapBuilder} from "@reduxjs/toolkit";

export const TRADE_REDUCER = (builder: ActionReducerMapBuilder<TradeSlice>) => {
  builder.addCase(getTrade.pending, (state) => {
    state["APIStatus"]["trade"] = SET_API_STATUS("initial");
  });

  builder.addCase(getTrade.fulfilled, (state, action) => {
    const trade = action.payload;
    if (typeof trade === "undefined") return;
    state["trade"] = trade;
    state["APIStatus"]["trade"] = SET_API_STATUS("success");
  });

  builder.addCase(getTrade.rejected, (state) => {
    state["APIStatus"]["trade"] = SET_API_STATUS("error");
  });
};
