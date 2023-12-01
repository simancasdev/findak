import {LocationSlice} from "../types";
import {updateCity, updateCountry} from "../thunks";
import {ActionReducerMapBuilder, current} from "@reduxjs/toolkit";

export const UPDATE_LOCATION_REDUCER = (
  builder: ActionReducerMapBuilder<LocationSlice>
) => {
  builder.addCase(updateCity.fulfilled, (state, action) => {
    const cityUpdated = action.payload;
    if (!cityUpdated) return;

    const {data} = current(state)["cities"];
    const {id} = cityUpdated;
    const index = data.findIndex((city) => city.id === id);
    state["cities"]["data"][index] = cityUpdated;
  });

  builder.addCase(updateCountry.fulfilled, (state, action) => {
    const countryUpdated = action.payload;
    if (!countryUpdated) return;

    const {data} = current(state)["countries"];
    const {id} = countryUpdated;
    const index = data.findIndex((country) => country.id === id);
    state["countries"]["data"][index] = countryUpdated;
  });
};
