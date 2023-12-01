import {OfferSlice} from "../types";
import {acceptOffer, declineOffer} from "../thunks";
import {ActionReducerMapBuilder, isAnyOf} from "@reduxjs/toolkit";

export const OFFER_UPDATE_REDUCER = (
  builder: ActionReducerMapBuilder<OfferSlice>
) => {
  builder.addMatcher(
    isAnyOf(declineOffer.fulfilled, acceptOffer.fulfilled),
    (state, action) => {
      const offerUpdated = action.payload;
      if (typeof offerUpdated === "undefined") return;

      let offersUpdated = state["received"]["waiting"].filter(
        (waitOffer) => waitOffer["id"] !== offerUpdated["id"]
      );
      state["received"]["waiting"] = offersUpdated;

      const {status} = offerUpdated;
      switch (status) {
        case "accepted":
          state["received"]["accepted"].push(offerUpdated);
          break;
        case "declined":
          state["received"]["declined"].push(offerUpdated);
          break;
      }
    }
  );
};
