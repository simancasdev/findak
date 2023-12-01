import {Schema} from "mongoose";
import {BaseAttrs, BaseDoc, Stars} from ".";

export interface FeedbackAttrs extends BaseAttrs {
  to: Schema.Types.ObjectId;
  from: Schema.Types.ObjectId;
  feedback: string;
  stars: Stars;
}

export interface FeedbackDoc extends BaseDoc {
  to: Schema.Types.ObjectId;
  from: Schema.Types.ObjectId;
  feedback: string;
  stars: Stars;
}
