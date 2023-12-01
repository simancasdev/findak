import {Schema} from "mongoose";
import {BaseAttrs, BaseDoc} from ".";

export interface ReportAttrs extends BaseAttrs {
  user_id: Schema.Types.ObjectId;
  description: string;
  reason: string;
}

export interface ReportDoc extends BaseDoc {
  user_id: Schema.Types.ObjectId;
  description: string;
  reason: string;
}
