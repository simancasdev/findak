import {InventorySlice} from "../../types";
import {getMyCollection} from "../../thunks";
import {SET_API_STATUS} from "../../../status.api";
import {ActionReducerMapBuilder} from "@reduxjs/toolkit";

export const COLLECTION_REDUCER = (
  builder: ActionReducerMapBuilder<InventorySlice>
) => {
  builder.addCase(getMyCollection.pending, (state) => {
    state["APIStatus"]["myCollection"] = SET_API_STATUS("initial");
  });

  builder.addCase(getMyCollection.fulfilled, (state, action) => {
    const list = action.payload;
    if (list) {
      state["myCollection"] = list.reverse();
      state["APIStatus"]["myCollection"] = SET_API_STATUS("success");
    }
  });

  builder.addCase(getMyCollection.rejected, (state) => {
    state["APIStatus"]["myCollection"] = SET_API_STATUS("error");
  });
};
