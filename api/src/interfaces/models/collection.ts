import {Schema} from "mongoose";
import {BaseAttrs, BaseDoc} from ".";

export interface CollectionAttrs extends BaseAttrs {
  user_id: Schema.Types.ObjectId;
  name: string;
}

export interface CollectionDoc extends BaseDoc {
  user_id: Schema.Types.ObjectId;
  name: string;
}
