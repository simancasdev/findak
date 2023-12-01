import {APIStatus, FeedbackModel} from "src/interfaces";

export interface FeedbackSlice {
  feedbacks: FeedbackModel[];
  APIStatus: {
    feedbacks: APIStatus;
  };
}
