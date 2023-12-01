import {LocationSlice} from "../types";
import {deleteCity, deleteCountry} from "../thunks";
import {ActionReducerMapBuilder} from "@reduxjs/toolkit";

export const DELETE_LOCATION_REDUCER = (
  builder: ActionReducerMapBuilder<LocationSlice>
) => {
  builder.addCase(deleteCountry.fulfilled, (state, action) => {
    let {countries} = state;
    const countryId = action.payload;
    // prettier-ignore
    countries["data"] = countries["data"].filter((city) => city["id"] !== countryId);
    state["countries"] = countries;
  });

  builder.addCase(deleteCity.fulfilled, (state, action) => {
    let {cities} = state;
    const cityId = action.payload;
    // prettier-ignore
    cities["data"] = cities["data"].filter((city) => city["id"] !== cityId);
    state["cities"] = cities;
  });
};
