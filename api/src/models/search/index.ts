import {BaseModel} from "..";
import {Schema} from "mongoose";
import {SET_SEARCH_VIRTUALS} from "./virtuals";
import {SearchAttrs, SearchDoc} from "../../interfaces";

export interface SearchModel extends BaseModel<SearchAttrs, SearchDoc> {}

export const SearchSchema = new Schema<SearchDoc>(
  {
    budget: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    references_url: {
      type: [String],
    },
    type: {
      type: String,
      enum: ["product", "service", "course"],
      required: true,
    },
    category_id: {
      type: Schema.Types.ObjectId,
      ref: "categories",
      required: true,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    country_id: {
      type: Schema.Types.ObjectId,
      ref: "countries",
      required: true,
    },
    city_id: {
      type: Schema.Types.ObjectId,
      ref: "cities",
      required: true,
    },
    status: {
      type: String,
      default: "created",
      enum: ["created", "cancelled", "finished"],
    },
    product_status: {
      type: String,
      enum: ["new", "used", "new_or_used"],
      default: "new_or_used",
    },
    accept_prices_higher_than_my_budget: {
      type: Boolean,
    },
  },
  {
    versionKey: false,
    timestamps: true,
    toJSON: {
      transform(_, search) {
        search.id = search._id;
        search.location = {
          city: search.city,
          country: search.country,
        };
        delete search._id;
        delete search.city;
        delete search.country;
        delete search.user_id;
        delete search.category_id;
        delete search.country_id;
        delete search.city_id;
      },
    },
  }
);

SET_SEARCH_VIRTUALS(SearchSchema);
