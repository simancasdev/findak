import {CategorySlice} from "../types";
import {deleteCategory} from "../thunks";
import {ActionReducerMapBuilder} from "@reduxjs/toolkit";

export const DELETE_CATEGORY_REDUCER = (
  builder: ActionReducerMapBuilder<CategorySlice>
) => {
  builder.addCase(deleteCategory.fulfilled, (state, action) => {
    const categoryId = action.payload;
    if (!categoryId) return;

    let {categories} = state;
    // prettier-ignore
    categories["data"] = categories["data"].filter((category) => category["id"] !== categoryId);
    state["categories"] = categories;
  });
};
