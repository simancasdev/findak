import {Schema} from "mongoose";
import {BaseAttrs, BaseDoc} from ".";

export interface LikeAttrs extends BaseAttrs {
  product_id: Schema.Types.ObjectId;
  user_id: Schema.Types.ObjectId;
}

export interface LikeDoc extends BaseDoc {
  product_id: Schema.Types.ObjectId;
  user_id: Schema.Types.ObjectId;
}
