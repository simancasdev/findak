import {SearchSlice} from "../types";
import {getTrending} from "../thunks";
import {getStatisticsShape} from "./helper";
import {SET_API_STATUS} from "../../status.api";
import {ActionReducerMapBuilder} from "@reduxjs/toolkit";

export const TRENDING_REDUCER = (
  builder: ActionReducerMapBuilder<SearchSlice>
) => {
  builder.addCase(getTrending.pending, (state) => {
    state["APIStatus"]["trending"] = SET_API_STATUS("initial");
  });

  builder.addCase(getTrending.fulfilled, (state, action) => {
    const trending = action.payload;
    if (typeof trending === "undefined") return;

    const {data} = trending;
    const statistics = getStatisticsShape(data);

    state["trending"] = trending;
    state["statistics"] = statistics;
    state["APIStatus"]["trending"] = SET_API_STATUS("success");
  });

  builder.addCase(getTrending.rejected, (state) => {
    state["APIStatus"]["trending"] = SET_API_STATUS("error");
  });
};
