import {Schema} from "mongoose";

export const SET_SUBSCRIPTION_VIRTUALS = (schema: Schema): void => {
  schema.virtual("user", {
    ref: "User",
    localField: "user_id",
    foreignField: "_id",
    justOne: true,
  });
};
