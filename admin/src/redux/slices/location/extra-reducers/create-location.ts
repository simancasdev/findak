import {LocationSlice} from "../types";
import {createCity, createCountry} from "../thunks";
import {ActionReducerMapBuilder} from "@reduxjs/toolkit";

export const CREATE_LOCATION_REDUCER = (
  builder: ActionReducerMapBuilder<LocationSlice>
) => {
  builder.addCase(createCountry.fulfilled, (state, action) => {
    const countryCreated = action.payload;
    if (!countryCreated) return;

    state["countries"]["data"] = [
      ...state["countries"]["data"],
      countryCreated,
    ];
  });

  builder.addCase(createCity.fulfilled, (state, action) => {
    const cityCreated = action.payload;
    if (!cityCreated) return;

    state["cities"]["data"] = [...state["cities"]["data"], cityCreated];
  });
};
