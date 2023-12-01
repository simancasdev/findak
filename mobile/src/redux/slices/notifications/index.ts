import {PREFIX} from "./helper";
import {RootState} from "src/interfaces";
import {createSlice} from "@reduxjs/toolkit";
import {initialState} from "./initial-state";
import {NOTIFICATIONS_REDUCER} from "./extra-reducers";

export const notificationSlice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {
    onReadNotifications: (state) => {
      state["unReadNotifications"] = [];
    },
  },
  extraReducers: (builder) => {
    NOTIFICATIONS_REDUCER(builder);
  },
});

export * from "./thunks";
export const {onReadNotifications} = notificationSlice.actions;
export const selectNotificationState = (state: RootState) =>
  state.notifications;

export default notificationSlice.reducer;
