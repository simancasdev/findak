import {Schema} from "mongoose";

export const SET_NOTIFICATION_VIRTUALS = (schema: Schema): void => {
  schema.virtual("offer", {
    ref: "Offer",
    localField: "offer_id",
    foreignField: "_id",
    justOne: true,
  });

  schema.virtual("trade", {
    ref: "Trade",
    localField: "trade_id",
    foreignField: "_id",
    justOne: true,
  });

  schema.virtual("feedback", {
    ref: "Feedback",
    localField: "feedback_id",
    foreignField: "_id",
    justOne: true,
  });
};
