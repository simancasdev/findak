import {Schema} from "mongoose";
import {BaseAttrs, BaseDoc} from ".";

export interface CityAttrs extends BaseAttrs {
  name: string;
  country_id: Schema.Types.ObjectId;
}

export interface CityDoc extends BaseDoc {
  name: string;
  country_id: Schema.Types.ObjectId;
}
