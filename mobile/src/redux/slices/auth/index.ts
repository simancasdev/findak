import {updateUser} from "..";
import {PREFIX} from "./helper";
import {RootState} from "src/interfaces";
import {initialState} from "./initial-state";
import {authenticate, login, signUp, syncUser} from "./thunks";
import {PayloadAction, createSlice, isAnyOf} from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {
    initAuthorizedApp: (state, action: PayloadAction<boolean>) => {
      state["isLogged"] = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authenticate.rejected, (state) => {
      state["authenticating"] = false;
    });

    builder.addMatcher(
      isAnyOf(
        login.fulfilled,
        signUp.fulfilled,
        syncUser.fulfilled,
        updateUser.fulfilled,
        authenticate.fulfilled
      ),
      (state, action) => {
        const user = action.payload;
        if (user) {
          const {subscription} = user;
          state["user"] = user;
          state["authUserId"] = user["id"];
          if (subscription) {
            const {expired} = subscription;
            state["isAuthUserPremium"] = !expired;
          }
        }
        state["authenticating"] = false;
      }
    );
  },
});

export * from "./thunks";
export const {initAuthorizedApp} = authSlice.actions;
export const selectAuthState = (state: RootState) => state.auth;

export default authSlice.reducer;
