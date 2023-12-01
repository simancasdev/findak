import {getCities} from "../thunks";
import {LocationSlice} from "../types";
import {initialState} from "../initial-state";
import {SET_API_STATUS} from "../../status.api";
import {ActionReducerMapBuilder} from "@reduxjs/toolkit";

export const CITY_REDUCER = (
  builder: ActionReducerMapBuilder<LocationSlice>
) => {
  builder.addCase(getCities.pending, (state) => {
    state["APIStatus"]["cities"] = SET_API_STATUS("initial");
  });

  builder.addCase(getCities.fulfilled, (state, action) => {
    const list = action.payload;
    state["cities"] = list ?? initialState["cities"];
    state["APIStatus"]["cities"] = SET_API_STATUS("success");
  });

  builder.addCase(getCities.rejected, (state) => {
    state["APIStatus"]["cities"] = SET_API_STATUS("error");
  });
};
