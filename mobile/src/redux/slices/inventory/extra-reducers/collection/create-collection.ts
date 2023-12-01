import {InventorySlice} from "../../types";
import {createCollection} from "../../thunks";
import {ActionReducerMapBuilder, current} from "@reduxjs/toolkit";

export const CREATE_COLLECTION_REDUCER = (
  builder: ActionReducerMapBuilder<InventorySlice>
) => {
  builder.addCase(createCollection.fulfilled, (state, action) => {
    const collectionCreated = action.payload;
    const {myCollection} = current(state);

    if (collectionCreated) {
      state["myCollection"] = [...myCollection, collectionCreated];
    }
  });
};
