import {BaseModel} from "..";
import {Schema} from "mongoose";
import {SET_PRODUCT_VIRTUALS} from "./virtuals";
import {ProductAttrs, ProductDoc} from "../../interfaces";

export interface ProductModel extends BaseModel<ProductAttrs, ProductDoc> {}

export const ProductSchema = new Schema<ProductDoc>(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
    },
    type: {
      type: String,
      enum: ["product", "service", "course"],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    references_url: {
      type: [String],
      required: true,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    category_id: {
      type: Schema.Types.ObjectId,
      ref: "categories",
      required: true,
    },
    collection_id: {
      type: Schema.Types.ObjectId,
      ref: "collections",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
    toJSON: {
      transform(_, product) {
        product.id = product._id;
      },
    },
  }
);

SET_PRODUCT_VIRTUALS(ProductSchema);
