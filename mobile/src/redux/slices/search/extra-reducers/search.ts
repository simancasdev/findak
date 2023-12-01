import {getSearch} from "../thunks";
import {SearchSlice} from "../types";
import {SET_API_STATUS} from "../../status.api";
import {ActionReducerMapBuilder} from "@reduxjs/toolkit";

export const SEARCH_REDUCER = (
  builder: ActionReducerMapBuilder<SearchSlice>
) => {
  builder.addCase(getSearch.pending, (state) => {
    state["APIStatus"]["search"] = SET_API_STATUS("initial");
  });

  builder.addCase(getSearch.fulfilled, (state, action) => {
    const list = action.payload;
    if (typeof list === "undefined") return;
    list["offers"] = list["offers"].reverse();
    state["search"] = list;
    state["APIStatus"]["search"] = SET_API_STATUS("success");
  });

  builder.addCase(getSearch.rejected, (state) => {
    state["APIStatus"]["search"] = SET_API_STATUS("error");
  });
};
