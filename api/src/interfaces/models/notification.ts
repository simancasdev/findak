import {Schema} from "mongoose";
import {BaseAttrs, BaseDoc, NotificationType} from ".";

export interface NotificationAttrs extends BaseAttrs {
  to: Schema.Types.ObjectId;
  offer_id?: Schema.Types.ObjectId;
  trade_id?: Schema.Types.ObjectId;
  feedback_id?: Schema.Types.ObjectId;
  type: NotificationType;
  readed: boolean;
}

export interface NotificationDoc extends BaseDoc {
  to: Schema.Types.ObjectId;
  offer_id: Schema.Types.ObjectId;
  trade_id: Schema.Types.ObjectId;
  feedback_id: Schema.Types.ObjectId;
  type: NotificationType;
  readed: boolean;
}
