import {PREFIX} from "./helper";
import {RootState} from "src/interfaces";
import {createSlice} from "@reduxjs/toolkit";
import {initialState} from "./initial-state";
import {CITY_REDUCER, COUNTRY_REDUCER} from "./extra-reducers";

export const locationSlice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    CITY_REDUCER(builder);
    COUNTRY_REDUCER(builder);
  },
});

export * from "./thunks";
export const {} = locationSlice.actions;
export const selectLocationState = (state: RootState) => state.location;

export default locationSlice.reducer;
