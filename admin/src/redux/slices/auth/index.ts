import {PREFIX} from "./helper";
import {RootState} from "interfaces";
import {initialState} from "./initial-state";
import {authenticate, login} from "./thunks";
import {createSlice, isAnyOf} from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      isAnyOf(login.fulfilled, authenticate.fulfilled),
      (state, action) => {
        const user = action.payload;
        state["authenticating"] = false;
        if (typeof user === "undefined") return;
        state["user"] = user;
        state["isLogged"] = true;
      }
    );
  },
});

export * from "./thunks";
export const {} = authSlice.actions;
export const selectAuthState = (state: RootState) => state.auth;

export default authSlice.reducer;
