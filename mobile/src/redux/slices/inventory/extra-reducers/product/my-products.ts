import {getMyProducts} from "../../thunks";
import {InventorySlice} from "../../types";
import {getProductsByCollection} from "./helper";
import {SET_API_STATUS} from "../../../status.api";
import {ActionReducerMapBuilder} from "@reduxjs/toolkit";

export const MY_PRODUCTS_REDUCER = (
  builder: ActionReducerMapBuilder<InventorySlice>
) => {
  builder.addCase(getMyProducts.pending, (state) => {
    state["APIStatus"]["myProducts"] = SET_API_STATUS("initial");
  });

  builder.addCase(getMyProducts.fulfilled, (state, action) => {
    const list = action.payload;
    if (list) {
      state["myProducts"] = list.reverse();
      state["productsByCollection"] = getProductsByCollection(list);
      state["APIStatus"]["myProducts"] = SET_API_STATUS("success");
    }
  });

  builder.addCase(getMyProducts.rejected, (state) => {
    state["APIStatus"]["myProducts"] = SET_API_STATUS("error");
  });
};
