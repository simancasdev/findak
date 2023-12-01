import {PREFIX} from "./helper";
import {RootState} from "src/interfaces";
import {initialState} from "./initial-state";
import {createSlice} from "@reduxjs/toolkit";
import {CATEGORIES_REDUCER} from "./extra-reducers";

export const categorySlice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    CATEGORIES_REDUCER(builder);
  },
});

export * from "./thunks";
export const {} = categorySlice.actions;
export const selectCategoryState = (state: RootState) => state.category;

export default categorySlice.reducer;
