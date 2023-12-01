import {PREFIX} from "./helper";
import {RootState} from "src/interfaces";
import {initialState} from "./initial-state";
import {createSlice} from "@reduxjs/toolkit";
import {FEEDBACKS_REDUCER} from "./extra-reducers";

export const feedbackSlice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    FEEDBACKS_REDUCER(builder);
  },
});

export * from "./thunks";
export const selectFeedbackState = (state: RootState) => state.feedback;

export default feedbackSlice.reducer;
