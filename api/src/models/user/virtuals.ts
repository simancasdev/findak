import {Schema} from "mongoose";

export const SET_USER_VIRTUALS = (schema: Schema): void => {
  schema.virtual("country", {
    ref: "Country",
    localField: "location.country_id",
    foreignField: "_id",
    justOne: true,
  });

  schema.virtual("city", {
    ref: "City",
    localField: "location.city_id",
    foreignField: "_id",
    justOne: true,
  });

  schema.virtual("subscription", {
    ref: "Subscription",
    localField: "subscription_id",
    foreignField: "_id",
    justOne: true,
  });

  schema.virtual("preferences_alert_category", {
    ref: "Category",
    localField: "preferences.search_alert.category_id",
    foreignField: "_id",
    justOne: true,
  });

  schema.virtual("feedbacks", {
    ref: "Feedback",
    localField: "_id",
    foreignField: "to",
    justOne: false,
  });

  schema.virtual("searches", {
    ref: "Search",
    localField: "_id",
    foreignField: "user_id",
    justOne: false,
  });

  schema.virtual("products", {
    ref: "Product",
    localField: "_id",
    foreignField: "user_id",
    justOne: false,
  });

  schema.virtual("offers", {
    ref: "Offer",
    localField: "_id",
    foreignField: "sender_id",
    justOne: false,
  });

  schema.virtual("trades_as_seller", {
    ref: "Trade",
    localField: "_id",
    foreignField: "seller_id",
    justOne: false,
  });

  schema.virtual("trades_as_buyer", {
    ref: "Trade",
    localField: "_id",
    foreignField: "buyer_id",
    justOne: false,
  });
};
