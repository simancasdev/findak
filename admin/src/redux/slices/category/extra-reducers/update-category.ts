import {CategorySlice} from "../types";
import {updateCategory} from "../thunks";
import {ActionReducerMapBuilder, current} from "@reduxjs/toolkit";

export const UPDATE_CATEGORY_REDUCER = (
  builder: ActionReducerMapBuilder<CategorySlice>
) => {
  builder.addCase(updateCategory.fulfilled, (state, action) => {
    const categoryUpdated = action.payload;
    if (!categoryUpdated) return;

    const {data} = current(state)["categories"];
    const {id} = categoryUpdated;
    const index = data.findIndex((category) => category.id === id);
    state["categories"]["data"][index] = categoryUpdated;
  });
};
