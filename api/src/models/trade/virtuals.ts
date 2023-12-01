import {Schema} from "mongoose";

export const SET_TRADE_VIRTUALS = (schema: Schema): void => {
  schema.virtual("buyer", {
    ref: "User",
    localField: "buyer_id",
    foreignField: "_id",
    justOne: true,
  });

  schema.virtual("seller", {
    ref: "User",
    localField: "seller_id",
    foreignField: "_id",
    justOne: true,
  });

  schema.virtual("offer", {
    ref: "Offer",
    localField: "offer_id",
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
