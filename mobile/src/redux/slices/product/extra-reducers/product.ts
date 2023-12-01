import {getProduct} from "../thunks";
import {ProductSlice} from "../types";
import {SET_API_STATUS} from "../../status.api";
import {ActionReducerMapBuilder} from "@reduxjs/toolkit";

export const PRODUCT_REDUCER = (
  builder: ActionReducerMapBuilder<ProductSlice>
) => {
  builder.addCase(getProduct.pending, (state) => {
    state["APIStatus"]["product"] = SET_API_STATUS("initial");
  });

  builder.addCase(getProduct.fulfilled, (state, action) => {
    const product = action.payload;
    if (product) {
      state["product"] = product;
      state["APIStatus"]["product"] = SET_API_STATUS("success");
    }
  });

  builder.addCase(getProduct.rejected, (state) => {
    state["APIStatus"]["product"] = SET_API_STATUS("error");
  });
};
