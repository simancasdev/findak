import {PREFIX} from "./helper";
import {initialState} from "./initial-state";
import {CategoryModel, RootState} from "interfaces";
import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {
  CATEGORIES_REDUCER,
  CREATE_CATEGORY_REDUCER,
  DELETE_CATEGORY_REDUCER,
  UPDATE_CATEGORY_REDUCER,
} from "./extra-reducers";

export const categorySlice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {
    prepareCategoryForm: (state, action: PayloadAction<CategoryModel>) => {
      state["form"] = action.payload;
    },
  },
  extraReducers: (builder) => {
    CATEGORIES_REDUCER(builder);
    UPDATE_CATEGORY_REDUCER(builder);
    CREATE_CATEGORY_REDUCER(builder);
    DELETE_CATEGORY_REDUCER(builder);
  },
});

export * from "./thunks";
export const {prepareCategoryForm} = categorySlice.actions;
export const selectCategoryState = (state: RootState) => state.category;

export default categorySlice.reducer;
