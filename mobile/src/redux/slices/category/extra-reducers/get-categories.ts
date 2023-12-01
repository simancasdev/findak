import {CategorySlice} from "../types";
import {getCategories} from "../thunks";
import {initialState} from "../initial-state";
import {SET_API_STATUS} from "../../status.api";
import {ActionReducerMapBuilder} from "@reduxjs/toolkit";

export const CATEGORIES_REDUCER = (
  builder: ActionReducerMapBuilder<CategorySlice>
) => {
  builder.addCase(getCategories.pending, (state) => {
    state["APIStatus"]["categories"] = SET_API_STATUS("initial");
  });

  builder.addCase(getCategories.fulfilled, (state, action) => {
    const list = action.payload;
    state["categories"] = list ?? initialState["categories"];
    state["APIStatus"]["categories"] = SET_API_STATUS("success");
  });

  builder.addCase(getCategories.rejected, (state) => {
    state["APIStatus"]["categories"] = SET_API_STATUS("error");
  });
};
