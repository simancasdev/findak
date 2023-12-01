import {CategorySlice} from "../types";
import {getUsers} from "../thunks";
import {initialState} from "../initial-state";
import {SET_API_STATUS} from "../../status.api";
import {ActionReducerMapBuilder} from "@reduxjs/toolkit";

export const USERS_REDUCER = (
  builder: ActionReducerMapBuilder<CategorySlice>
) => {
  builder.addCase(getUsers.pending, (state) => {
    state["APIStatus"]["users"] = SET_API_STATUS("initial");
  });

  builder.addCase(getUsers.fulfilled, (state, action) => {
    const list = action.payload;
    state["users"] = list ?? initialState["users"];
    state["APIStatus"]["users"] = SET_API_STATUS("success");
  });

  builder.addCase(getUsers.rejected, (state) => {
    state["APIStatus"]["users"] = SET_API_STATUS("error");
  });
};
