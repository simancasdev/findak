import {PREFIX} from "./helper";
import {RootState} from "src/interfaces";
import {initialState} from "./initial-state";
import {createSlice} from "@reduxjs/toolkit";
import {INITIAL_PRODUCT} from "src/redux/initial-states";
import {LIKE_REDUCER, PRODUCT_REDUCER} from "./extra-reducers";

export const productSlice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {
    resetProduct: (state) => {
      state["product"] = INITIAL_PRODUCT;
    },
  },
  extraReducers: (builder) => {
    LIKE_REDUCER(builder);
    PRODUCT_REDUCER(builder);
  },
});

export * from "./thunks";
export const {resetProduct} = productSlice.actions;
export const selectProductState = (state: RootState) => state.product;

export default productSlice.reducer;
