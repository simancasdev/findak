import {OfferSlice} from "../types";
import {offerOrganizer} from "./helper";
import {getReceivedOffers} from "../thunks";
import {SET_API_STATUS} from "../../status.api";
import {ActionReducerMapBuilder} from "@reduxjs/toolkit";

export const GET_RECEIVED_OFFERS_REDUCER = (
  builder: ActionReducerMapBuilder<OfferSlice>
) => {
  builder.addCase(getReceivedOffers.pending, (state) => {
    state["APIStatus"]["received"] = SET_API_STATUS("initial");
  });

  builder.addCase(getReceivedOffers.fulfilled, (state, action) => {
    const list = action.payload;

    if (typeof list === "undefined") return;
    const {waiting, accepted, declined} = offerOrganizer(list["data"]);

    state["received"]["waiting"] = waiting;
    state["received"]["accepted"] = accepted;
    state["received"]["declined"] = declined;
    state["APIStatus"]["received"] = SET_API_STATUS("success");
  });

  builder.addCase(getReceivedOffers.rejected, (state) => {
    state["APIStatus"]["received"] = SET_API_STATUS("error");
  });
};
