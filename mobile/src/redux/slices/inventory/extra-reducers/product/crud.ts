import {deleteProduct} from "../../thunks";
import {InventorySlice} from "../../types";
import {ActionReducerMapBuilder} from "@reduxjs/toolkit";

export const CRUD_REDUCER = (
  builder: ActionReducerMapBuilder<InventorySlice>
) => {
  builder.addCase(deleteProduct.fulfilled, (state, action) => {
    const productDeleted = action.payload;
    if (productDeleted) {
      state["myProducts"] = state["myProducts"].filter(
        (product) => product["id"] !== productDeleted["id"]
      );
    }
  });
};
