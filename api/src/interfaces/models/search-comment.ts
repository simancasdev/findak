import {Schema} from "mongoose";
import {BaseAttrs, BaseDoc} from ".";

export interface SearchCommentAttrs extends BaseAttrs {
  comment: string;
  search_id: Schema.Types.ObjectId;
  by: Schema.Types.ObjectId;
}

export interface SearchCommentDoc extends BaseDoc {
  comment: string;
  search_id: Schema.Types.ObjectId;
  by: Schema.Types.ObjectId;
}
