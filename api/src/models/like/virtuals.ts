import {Schema} from "mongoose";

export const SET_LIKE_VIRTUALS = (schema: Schema): void => {
  schema.virtual("user", {
    ref: "User",
    localField: "user_id",
    foreignField: "_id",
    justOne: true,
  });

  schema.virtual("product", {
    ref: "Product",
    localField: "product_id",
    foreignField: "_id",
    justOne: true,
  });
};
