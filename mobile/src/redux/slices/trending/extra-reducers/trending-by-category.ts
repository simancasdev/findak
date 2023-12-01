import {SearchSlice} from "../types";
import {getTrendingByCategory} from "../thunks";
import {SET_API_STATUS} from "../../status.api";
import {ActionReducerMapBuilder} from "@reduxjs/toolkit";

export const TRENDING_BY_CATEGORY_REDUCER = (
  builder: ActionReducerMapBuilder<SearchSlice>
) => {
  builder.addCase(getTrendingByCategory.pending, (state) => {
    state["APIStatus"]["trendingByCategory"] = SET_API_STATUS("initial");
  });

  builder.addCase(getTrendingByCategory.fulfilled, (state, action) => {
    const trending = action.payload;
    if (typeof trending === "undefined") return;

    state["trendingByCategory"] = trending;
    state["APIStatus"]["trendingByCategory"] = SET_API_STATUS("success");
  });

  builder.addCase(getTrendingByCategory.rejected, (state) => {
    state["APIStatus"]["trendingByCategory"] = SET_API_STATUS("error");
  });
};
