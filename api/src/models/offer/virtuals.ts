import {Schema} from "mongoose";

export const SET_OFFER_VIRTUALS = (schema: Schema): void => {
  schema.virtual("sender", {
    ref: "User",
    localField: "sender_id",
    foreignField: "_id",
    justOne: true,
  });

  schema.virtual("receiver", {
    ref: "User",
    localField: "receiver_id",
    foreignField: "_id",
    justOne: true,
  });

  schema.virtual("search", {
    ref: "Search",
    localField: "search_id",
    foreignField: "_id",
    justOne: true,
  });
};
