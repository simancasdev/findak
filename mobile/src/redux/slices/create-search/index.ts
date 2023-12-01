import {PREFIX} from "./helper";
import {initialState} from "./initial-state";
import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {CreateSearchStep, RootState} from "src/interfaces";

export const createSearchSlice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {
    onChangeCreateSearchStep: (
      state,
      action: PayloadAction<CreateSearchStep>
    ) => {
      state["createSearchStep"] = action.payload;
    },
    resetCreateSearchState: (state) => {
      state["createSearchStep"] = initialState["createSearchStep"];
    },
  },
});

export * from "./thunks";
export const {onChangeCreateSearchStep, resetCreateSearchState} =
  createSearchSlice.actions;
export const selectCreateSearchState = (state: RootState) => state.createSearch;

export default createSearchSlice.reducer;
