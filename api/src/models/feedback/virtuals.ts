import {Schema} from "mongoose";

export const SET_FEEDBACK_VIRTUALS = (schema: Schema): void => {
  schema.virtual("sender", {
    ref: "User",
    localField: "from",
    foreignField: "_id",
    justOne: true,
  });

  schema.virtual("receiver", {
    ref: "User",
    localField: "to",
    foreignField: "_id",
    justOne: true,
  });
};
