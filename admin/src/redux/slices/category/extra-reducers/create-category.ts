import {CategorySlice} from "../types";
import {createCategory} from "../thunks";
import {ActionReducerMapBuilder} from "@reduxjs/toolkit";

export const CREATE_CATEGORY_REDUCER = (
  builder: ActionReducerMapBuilder<CategorySlice>
) => {
  builder.addCase(createCategory.fulfilled, (state, action) => {
    const categoryCreated = action.payload;
    if (!categoryCreated) return;

    state["categories"]["data"] = [
      ...state["categories"]["data"],
      categoryCreated,
    ];
  });
};
