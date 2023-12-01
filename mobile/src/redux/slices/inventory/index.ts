import {PREFIX} from "./helper";
import {RootState} from "src/interfaces";
import {initialState} from "./initial-state";
import {createSlice} from "@reduxjs/toolkit";
import {
  CRUD_REDUCER,
  COLLECTION_REDUCER,
  MY_PRODUCTS_REDUCER,
  CREATE_COLLECTION_REDUCER,
  REMOVE_COLLECTION_REDUCER,
} from "./extra-reducers";

export const inventorySlice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    CRUD_REDUCER(builder);
    COLLECTION_REDUCER(builder);
    MY_PRODUCTS_REDUCER(builder);
    CREATE_COLLECTION_REDUCER(builder);
    REMOVE_COLLECTION_REDUCER(builder);
  },
});

export * from "./thunks";
export const {} = inventorySlice.actions;
export const selectInventoryState = (state: RootState) => state.inventory;

export default inventorySlice.reducer;
