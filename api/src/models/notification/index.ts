import {BaseModel} from "..";
import {Schema} from "mongoose";
import {SET_NOTIFICATION_VIRTUALS} from "./virtuals";
import {NotificationAttrs, NotificationDoc} from "../../interfaces";

export interface NotificationModel
  extends BaseModel<NotificationAttrs, NotificationDoc> {}

export const NotificationSchema = new Schema<NotificationDoc>(
  {
    to: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    offer_id: {
      type: Schema.Types.ObjectId,
      ref: "offers",
    },
    trade_id: {
      type: Schema.Types.ObjectId,
      ref: "trades",
    },
    feedback_id: {
      type: Schema.Types.ObjectId,
      ref: "feedbacks",
    },
    readed: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      enum: [
        "offer_accepted",
        "offer_received",
        "offer_declined",
        "trade_rejected",
        "trade_approved",
        "trade_completed",
        "feedback_received",
      ],
    },
  },
  {
    versionKey: false,
    timestamps: true,
    toJSON: {
      transform(_, notification) {
        notification.id = notification._id;
        delete notification._id;
        delete notification.trade_id;
        delete notification.offer_id;
        delete notification.feedback_id;
        if (!notification.trade) delete notification.trade;
        if (!notification.offer) delete notification.offer;
        if (!notification.feedback) delete notification.feedback;
      },
    },
  }
);

SET_NOTIFICATION_VIRTUALS(NotificationSchema);
