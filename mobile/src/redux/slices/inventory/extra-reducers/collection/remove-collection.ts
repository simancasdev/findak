import {InventorySlice} from "../../types";
import {removeCollection} from "../../thunks";
import {ActionReducerMapBuilder, current} from "@reduxjs/toolkit";

export const REMOVE_COLLECTION_REDUCER = (
  builder: ActionReducerMapBuilder<InventorySlice>
) => {
  builder.addCase(removeCollection.fulfilled, (state, action) => {
    const {myCollection} = current(state);
    const removed = action.payload;
    if (removed) {
      state["myCollection"] = myCollection.filter(
        (collection) => collection["id"] !== removed["id"]
      );
    }
  });
};
