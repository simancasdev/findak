import {PREFIX} from "./helper";
import {api} from "src/services";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {thunkBadRequest} from "../../thunk.bad-request";
import {FeedbackPayload, FeedbackModel} from "src/interfaces";
import {
  showAlert,
  closeSheet,
  toggleButtonLoader,
  SEND_FEEDBACK_LOADER,
} from "..";

export const getFeedbacks = createAsyncThunk(
  `${PREFIX}/get/all`,
  async (userId: string, thunkAPI): Promise<FeedbackModel[] | undefined> => {
    try {
      return await api.Get<FeedbackModel[]>(`/feedbacks/of/${userId}`);
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    }
  }
);

export const sendFeedback = createAsyncThunk(
  `${PREFIX}/send/feedback`,
  async ({feedback, callback}: FeedbackPayload, thunkAPI): Promise<void> => {
    thunkAPI.dispatch(toggleButtonLoader(SEND_FEEDBACK_LOADER));

    try {
      await api.Post<FeedbackModel>("/feedbacks", feedback);
      thunkAPI.dispatch(closeSheet());
      thunkAPI.dispatch(
        showAlert({
          type: "success",
          message: "feedback_sent",
        })
      );
      callback();
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    } finally {
      thunkAPI.dispatch(toggleButtonLoader(SEND_FEEDBACK_LOADER));
    }
  }
);
