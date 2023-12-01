import {PREFIX} from "./helper";
import {RootState} from "src/interfaces";
import {initialState} from "./initial-state";
import {createSlice} from "@reduxjs/toolkit";
import {TRENDING_BY_CATEGORY_REDUCER, TRENDING_REDUCER} from "./extra-reducers";

export const trendingSlice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    TRENDING_REDUCER(builder);
    TRENDING_BY_CATEGORY_REDUCER(builder);
  },
});

export * from "./thunks";
export const {} = trendingSlice.actions;
export const selectTrendingState = (state: RootState) => state.trending;

export default trendingSlice.reducer;
