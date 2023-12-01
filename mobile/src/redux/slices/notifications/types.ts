import {APIStatus, List, NotificationModel} from "src/interfaces";

export interface NotificationSlice {
  notifications: List<NotificationModel[]>;
  unReadNotifications: NotificationModel[];
  APIStatus: {
    notifications: APIStatus;
  };
}
