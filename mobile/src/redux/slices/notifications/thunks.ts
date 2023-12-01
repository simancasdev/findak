import {PREFIX} from "./helper";
import {api} from "src/services";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {List, NotificationModel} from "src/interfaces";
import {thunkBadRequest} from "../../thunk.bad-request";

export const getMyNotifications = createAsyncThunk(
  `${PREFIX}/get/my/notifications`,
  async (_, thunkAPI): Promise<List<NotificationModel[]> | undefined> => {
    try {
      return await api.Get<List<NotificationModel[]>>(`/notifications/me`);
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    }
  }
);

export const readNotifications = createAsyncThunk(
  `${PREFIX}/read/notifications`,
  async (_, thunkAPI): Promise<void> => {
    try {
      await api.Get(`/notifications/read`);
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    }
  }
);
