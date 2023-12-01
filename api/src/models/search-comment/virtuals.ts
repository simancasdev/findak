import {Schema} from "mongoose";

export const SET_SEARCH_COMMENT_VIRTUALS = (schema: Schema): void => {
  schema.virtual("user", {
    ref: "User",
    localField: "by",
    foreignField: "_id",
    justOne: true,
  });
};
