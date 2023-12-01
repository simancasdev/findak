import {LocationSlice} from "../types";
import {initialState} from "../initial-state";
import {SET_API_STATUS} from "../../status.api";
import {getCities, getCountries} from "../thunks";
import {ActionReducerMapBuilder} from "@reduxjs/toolkit";

export const GET_LOCATION_REDUCER = (
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

  builder.addCase(getCountries.pending, (state) => {
    state["APIStatus"]["countries"] = SET_API_STATUS("initial");
  });

  builder.addCase(getCountries.fulfilled, (state, action) => {
    const list = action.payload;
    state["countries"] = list ?? initialState["countries"];
    state["APIStatus"]["countries"] = SET_API_STATUS("success");
  });

  builder.addCase(getCountries.rejected, (state) => {
    state["APIStatus"]["countries"] = SET_API_STATUS("error");
  });
};
