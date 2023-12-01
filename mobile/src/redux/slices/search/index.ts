import {PREFIX} from "./helper";
import {initialState} from "./initial-state";
import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {ExploreFilter, RootState} from "src/interfaces";
import {
  ALERTS_REDUCER,
  SEARCH_REDUCER,
  EXPLORE_REDUCER,
  SEARCHES_REDUCER,
} from "./extra-reducers";

export const searchSlice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {
    onChangeSearchFilter: (
      state,
      action: PayloadAction<Partial<ExploreFilter>>
    ) => {
      state["buildingFilters"] = {
        ...state["buildingFilters"],
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    ALERTS_REDUCER(builder);
    SEARCH_REDUCER(builder);
    EXPLORE_REDUCER(builder);
    SEARCHES_REDUCER(builder);
  },
});

export * from "./thunks";
export const {onChangeSearchFilter} = searchSlice.actions;
export const selectSearchState = (state: RootState) => state.search;

export default searchSlice.reducer;
