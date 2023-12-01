import {PREFIX} from "./helper";
import {RootState} from "interfaces";
import {initialState} from "./initial-state";
import {createSlice} from "@reduxjs/toolkit";
import {USERS_REDUCER} from "./extra-reducers";

export const userSlice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    USERS_REDUCER(builder);
  },
});

export * from "./thunks";
export const {} = userSlice.actions;
export const selectUserState = (state: RootState) => state.users;

export default userSlice.reducer;
