import {Schema} from "mongoose";
import {BaseAttrs, BaseDoc, ProductStatus, SearchStatus, SearchType} from ".";

export interface SearchAttrs extends BaseAttrs {
  budget: number;
  description: string;
  references_url?: string[];
  type: SearchType;
  category_id: Schema.Types.ObjectId;
  city_id: Schema.Types.ObjectId;
  country_id: Schema.Types.ObjectId;
  user_id: Schema.Types.ObjectId;
  product_status: ProductStatus;
  status: SearchStatus;
  accept_prices_higher_than_my_budget: boolean;
}

export interface SearchDoc extends BaseDoc {
  budget: number;
  description: string;
  references_url?: string[];
  type: SearchType;
  category_id: Schema.Types.ObjectId;
  city_id: Schema.Types.ObjectId;
  country_id: Schema.Types.ObjectId;
  user_id: Schema.Types.ObjectId;
  product_status: ProductStatus;
  status: SearchStatus;
  accept_prices_higher_than_my_budget: boolean;
}
