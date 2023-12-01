import {Schema} from "mongoose";

export const SET_SEARCH_VIRTUALS = (schema: Schema): void => {
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

  schema.virtual("country", {
    ref: "Country",
    localField: "country_id",
    foreignField: "_id",
    justOne: true,
  });

  schema.virtual("city", {
    ref: "City",
    localField: "city_id",
    foreignField: "_id",
    justOne: true,
  });

  schema.virtual("offers", {
    ref: "Offer",
    localField: "_id",
    foreignField: "search_id",
    justOne: false,
  });

  schema.virtual("comments", {
    ref: "SearchComment",
    localField: "_id",
    foreignField: "search_id",
    justOne: false,
  });
};
