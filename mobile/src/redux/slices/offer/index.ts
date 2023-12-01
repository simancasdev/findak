import {PREFIX} from "./helper";
import {RootState} from "src/interfaces";
import {createSlice} from "@reduxjs/toolkit";
import {SET_API_STATUS} from "../status.api";
import {initialState} from "./initial-state";
import {INITIAL_OFFER} from "src/redux/initial-states";
import {
  GET_OFFER_REDUCER,
  OFFER_UPDATE_REDUCER,
  GET_SENT_OFFERS_REDUCER,
  GET_RECEIVED_OFFERS_REDUCER,
} from "./extra-reducers";

export const offerSlice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {
    onCleanOffer: (state) => {
      state["APIStatus"]["offer"] = SET_API_STATUS("initial");
      state["offer"] = INITIAL_OFFER;
    },
  },
  extraReducers: (builder) => {
    GET_OFFER_REDUCER(builder);
    GET_SENT_OFFERS_REDUCER(builder);
    GET_RECEIVED_OFFERS_REDUCER(builder);
    OFFER_UPDATE_REDUCER(builder);
  },
});

export * from "./thunks";
export const {onCleanOffer} = offerSlice.actions;
export const selectOfferState = (state: RootState) => state.offer;
export default offerSlice.reducer;
