import {BaseModel} from "..";
import {Schema} from "mongoose";
import {SET_LIKE_VIRTUALS} from "./virtuals";
import {LikeAttrs, LikeDoc} from "../../interfaces";

export interface LikeModel extends BaseModel<LikeAttrs, LikeDoc> {}

export const LikeSchema = new Schema<LikeDoc>(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    product_id: {
      type: Schema.Types.ObjectId,
      ref: "products",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
    toJSON: {
      transform(_, like) {
        like.id = like._id;
      },
    },
  }
);

SET_LIKE_VIRTUALS(LikeSchema);
