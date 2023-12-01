import {FeedbackSlice} from "./types";
import {SET_API_STATUS} from "../status.api";

export const initialState: FeedbackSlice = {
  feedbacks: [],
  APIStatus: {
    feedbacks: SET_API_STATUS("initial"),
  },
};
