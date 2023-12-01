import {Schema} from "mongoose";

export const SET_CONVERSATION_VIRTUALS = (schema: Schema): void => {
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

  schema.virtual("product", {
    ref: "Product",
    localField: "product_id",
    foreignField: "_id",
    justOne: true,
  });

  schema.virtual("messages", {
    ref: "Message",
    localField: "_id",
    foreignField: "conversation_id",
  });
};
