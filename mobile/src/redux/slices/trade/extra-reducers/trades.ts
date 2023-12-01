import {getTrades} from "../thunks";
import {TradeSlice} from "../types";
import {tradeOrganizer} from "./helper";
import {SET_API_STATUS} from "../../status.api";
import {ActionReducerMapBuilder} from "@reduxjs/toolkit";

export const TRADES_REDUCER = (
  builder: ActionReducerMapBuilder<TradeSlice>
) => {
  builder.addCase(getTrades.pending, (state) => {
    state["APIStatus"]["trades"] = SET_API_STATUS("initial");
  });

  builder.addCase(getTrades.fulfilled, (state, action) => {
    const list = action.payload;
    if (typeof list === "undefined") return;
    const {inProgress, completed, rejected} = tradeOrganizer(list["data"]);

    state["trades"]["inProgress"] = inProgress;
    state["trades"]["completed"] = completed;
    state["trades"]["rejected"] = rejected;
    state["APIStatus"]["trades"] = SET_API_STATUS("success");
  });

  builder.addCase(getTrades.rejected, (state) => {
    state["APIStatus"]["trades"] = SET_API_STATUS("error");
  });
};
