import {SearchSlice} from "../types";
import {getExplore} from "../thunks";
import {SET_API_STATUS} from "../../status.api";
import {ActionReducerMapBuilder} from "@reduxjs/toolkit";

export const EXPLORE_REDUCER = (
  builder: ActionReducerMapBuilder<SearchSlice>
) => {
  builder.addCase(getExplore.pending, (state) => {
    state["APIStatus"]["explore"] = SET_API_STATUS("initial");
  });

  builder.addCase(getExplore.fulfilled, (state, action) => {
    let searches = action.payload;
    if (typeof searches === "undefined") return;
    searches["data"] = searches["data"].reverse();
    state["explore"] = searches;
    state["APIStatus"]["explore"] = SET_API_STATUS("success");
  });

  builder.addCase(getExplore.rejected, (state) => {
    state["APIStatus"]["explore"] = SET_API_STATUS("error");
  });
};
