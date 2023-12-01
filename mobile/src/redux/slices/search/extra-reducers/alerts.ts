import {SearchSlice} from "../types";
import {getMyAlerts} from "../thunks";
import {SET_API_STATUS} from "../../status.api";
import {ActionReducerMapBuilder} from "@reduxjs/toolkit";

export const ALERTS_REDUCER = (
  builder: ActionReducerMapBuilder<SearchSlice>
) => {
  builder.addCase(getMyAlerts.pending, (state) => {
    state["APIStatus"]["alerts"] = SET_API_STATUS("initial");
  });

  builder.addCase(getMyAlerts.fulfilled, (state, action) => {
    let list = action.payload;
    if (list) {
      list["data"] = list["data"].reverse();
      state["alerts"] = list;
      state["APIStatus"]["alerts"] = SET_API_STATUS("success");
    } else {
      state["APIStatus"]["alerts"] = SET_API_STATUS("error");
    }
  });
};
