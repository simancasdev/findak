import {Schema} from "mongoose";

export const SET_PRODUCT_VIRTUALS = (schema: Schema): void => {
  schema.virtual("user", {
    ref: "User",
    localField: "user_id",
    foreignField: "_id",
    justOne: true,
  });

  schema.virtual("category", {
    ref: "Category",
    localField: "category_id",
    foreignField: "_id",
    justOne: true,
  });

  schema.virtual("likes", {
    ref: "Like",
    localField: "_id",
    foreignField: "product_id",
    justOne: false,
  });

  schema.virtual("product_collection", {
    ref: "Collection",
    localField: "collection_id",
    foreignField: "_id",
    justOne: true,
  });
};
