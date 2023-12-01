import {OfferSlice} from "../types";
import {offerOrganizer} from "./helper";
import {getSentOffers} from "../thunks";
import {SET_API_STATUS} from "../../status.api";
import {ActionReducerMapBuilder} from "@reduxjs/toolkit";

export const GET_SENT_OFFERS_REDUCER = (
  builder: ActionReducerMapBuilder<OfferSlice>
) => {
  builder.addCase(getSentOffers.pending, (state) => {
    state["APIStatus"]["sent"] = SET_API_STATUS("initial");
  });

  builder.addCase(getSentOffers.fulfilled, (state, action) => {
    const list = action.payload;
    if (typeof list === "undefined") return;
    const {waiting, declined, accepted} = offerOrganizer(list["data"]);

    state["sent"]["waiting"] = waiting;
    state["sent"]["accepted"] = accepted;
    state["sent"]["declined"] = declined;
    state["APIStatus"]["sent"] = SET_API_STATUS("success");
  });

  builder.addCase(getSentOffers.rejected, (state) => {
    state["APIStatus"]["sent"] = SET_API_STATUS("error");
  });
};
