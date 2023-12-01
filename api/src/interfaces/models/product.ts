import {Schema} from "mongoose";
import {BaseAttrs, BaseDoc, SearchType} from ".";

export interface ProductAttrs extends BaseAttrs {
  title: string;
  price: number;
  discount: number;
  type: SearchType;
  description: string;
  references_url: string[];
  user_id: Schema.Types.ObjectId;
  category_id: Schema.Types.ObjectId;
  collection_id: Schema.Types.ObjectId;
}

export interface ProductDoc extends BaseDoc {
  title: string;
  price: number;
  discount: number;
  type: SearchType;
  description: string;
  references_url: string[];
  user_id: Schema.Types.ObjectId;
  category_id: Schema.Types.ObjectId;
  collection_id: Schema.Types.ObjectId;
}
