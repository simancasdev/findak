import {NotificationSlice} from "../types";
import {getMyNotifications} from "../thunks";
import {SET_API_STATUS} from "../../status.api";
import {ActionReducerMapBuilder} from "@reduxjs/toolkit";

export const NOTIFICATIONS_REDUCER = (
  builder: ActionReducerMapBuilder<NotificationSlice>
) => {
  builder.addCase(getMyNotifications.pending, (state) => {
    state["APIStatus"]["notifications"] = SET_API_STATUS("initial");
  });

  builder.addCase(getMyNotifications.fulfilled, (state, action) => {
    let payload = action.payload;
    if (typeof payload === "undefined") return;

    payload["data"] = payload["data"].reverse();
    
    state["unReadNotifications"] = payload["data"].filter((notification) => !notification.readed);
    state["notifications"] = payload;
    state["APIStatus"]["notifications"] = SET_API_STATUS("success");
  });

  builder.addCase(getMyNotifications.rejected, (state) => {
    state["APIStatus"]["notifications"] = SET_API_STATUS("error");
  });
};
