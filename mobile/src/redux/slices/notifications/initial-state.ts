import {NotificationSlice} from "./types";
import {SET_API_STATUS} from "../status.api";
import {INITIAL_LIST} from "src/redux/initial-states";

export const initialState: NotificationSlice = {
  notifications: INITIAL_LIST,
  unReadNotifications: [],
  APIStatus: {
    notifications: SET_API_STATUS("initial"),
  },
};
