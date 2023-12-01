import {SearchSlice} from "../types";
import {getSearches} from "../thunks";
import {SET_API_STATUS} from "../../status.api";
import {ActionReducerMapBuilder} from "@reduxjs/toolkit";

export const SEARCHES_REDUCER = (
  builder: ActionReducerMapBuilder<SearchSlice>
) => {
  builder.addCase(getSearches.pending, (state) => {
    state["APIStatus"]["searches"] = SET_API_STATUS("initial");
  });

  builder.addCase(getSearches.fulfilled, (state, action) => {
    const payload = action.payload;
    if (typeof payload === "undefined") return;

    const {searches, filtersApplied} = payload;

    state["searches"] = searches;
    state["filtersApplied"] = filtersApplied;
    state["APIStatus"]["searches"] = SET_API_STATUS("success");
  });

  builder.addCase(getSearches.rejected, (state) => {
    state["APIStatus"]["searches"] = SET_API_STATUS("error");
  });
};
