import {PREFIX} from "./helper";
import {RootState} from "interfaces";
import {initialState} from "./initial-state";
import {SetLocationFormPayload} from "./types";
import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {
  GET_LOCATION_REDUCER,
  UPDATE_LOCATION_REDUCER,
  DELETE_LOCATION_REDUCER,
  CREATE_LOCATION_REDUCER,
} from "./extra-reducers";

export const locationSlice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {
    prepareLocationForm: (
      state,
      action: PayloadAction<SetLocationFormPayload>
    ) => {
      const {type, body} = action.payload;
      switch (type) {
        case "city-form":
          state["cityForm"] = body;
          break;
        case "country-form":
          state["countryForm"] = body;
          break;

        default:
          throw new Error(`Location Form type: ${type} not handled`);
      }
    },
  },
  extraReducers: (builder) => {
    GET_LOCATION_REDUCER(builder);
    UPDATE_LOCATION_REDUCER(builder);
    DELETE_LOCATION_REDUCER(builder);
    CREATE_LOCATION_REDUCER(builder);
  },
});

export * from "./thunks";
export const {prepareLocationForm} = locationSlice.actions;
export const selectLocationState = (state: RootState) => state.location;
export default locationSlice.reducer;
