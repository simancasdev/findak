import {UserSlice} from "../types";
import {getUserProfile} from "../..";
import {SET_API_STATUS} from "../../status.api";
import {INITIAL_USER} from "src/redux/initial-states";
import {ActionReducerMapBuilder} from "@reduxjs/toolkit";

export const USER_REDUCER = (builder: ActionReducerMapBuilder<UserSlice>) => {
  builder.addCase(getUserProfile.pending, (state) => {
    state["APIStatus"]["user"] = SET_API_STATUS("initial");
  });

  builder.addCase(getUserProfile.fulfilled, (state, action) => {
    const user = action.payload;
    state["user"] = user ?? INITIAL_USER;
    state["APIStatus"]["user"] = SET_API_STATUS("success");
  });

  builder.addCase(getUserProfile.rejected, (state) => {
    state["APIStatus"]["user"] = SET_API_STATUS("error");
  });
};
