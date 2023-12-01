import {FeedbackSlice} from "../types";
import {getFeedbacks} from "../thunks";
import {SET_API_STATUS} from "../../status.api";
import {ActionReducerMapBuilder} from "@reduxjs/toolkit";

export const FEEDBACKS_REDUCER = (
  builder: ActionReducerMapBuilder<FeedbackSlice>
) => {
  builder.addCase(getFeedbacks.pending, (state) => {
    state["APIStatus"]["feedbacks"] = SET_API_STATUS("initial");
  });

  builder.addCase(getFeedbacks.fulfilled, (state, action) => {
    const feedbacks = action.payload;
    if (typeof feedbacks === "undefined") return;

    state["feedbacks"] = feedbacks;
    state["APIStatus"]["feedbacks"] = SET_API_STATUS("success");
  });

  builder.addCase(getFeedbacks.rejected, (state) => {
    state["APIStatus"]["feedbacks"] = SET_API_STATUS("error");
  });
};
