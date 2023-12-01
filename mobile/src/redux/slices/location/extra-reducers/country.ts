import {getCountries} from "../thunks";
import {LocationSlice} from "../types";
import {initialState} from "../initial-state";
import {SET_API_STATUS} from "../../status.api";
import {ActionReducerMapBuilder} from "@reduxjs/toolkit";

export const COUNTRY_REDUCER = (
  builder: ActionReducerMapBuilder<LocationSlice>
) => {
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
