import {getOffer} from "../thunks";
import {OfferSlice} from "../types";
import {SET_API_STATUS} from "../../status.api";
import {ActionReducerMapBuilder} from "@reduxjs/toolkit";

export const GET_OFFER_REDUCER = (
  builder: ActionReducerMapBuilder<OfferSlice>
) => {
  builder.addCase(getOffer.pending, (state) => {
    state["APIStatus"]["offer"] = SET_API_STATUS("initial");
  });

  builder.addCase(getOffer.fulfilled, (state, action) => {
    const offer = action.payload;

    if (typeof offer === "undefined") return;
    state["offer"] = offer;
    state["APIStatus"]["offer"] = SET_API_STATUS("success");
  });

  builder.addCase(getOffer.rejected, (state) => {
    state["APIStatus"]["offer"] = SET_API_STATUS("error");
  });
};
