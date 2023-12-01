import {UserSlice} from "../types";
import {getPeople} from "../thunks";
import {SET_API_STATUS} from "../../status.api";
import {ActionReducerMapBuilder} from "@reduxjs/toolkit";

export const USERS_REDUCER = (builder: ActionReducerMapBuilder<UserSlice>) => {
  builder.addCase(getPeople.pending, (state) => {
    state["APIStatus"]["people"] = SET_API_STATUS("initial");
  });

  builder.addCase(getPeople.fulfilled, (state, action) => {
    const list = action.payload;
    if (list) {
      state["people"] = list;
      state["APIStatus"]["people"] = SET_API_STATUS("success");
    } else {
      state["APIStatus"]["people"] = SET_API_STATUS("error");
    }
  });
};
