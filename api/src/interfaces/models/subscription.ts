import {Moment} from "moment";
import {Schema} from "mongoose";
import {BaseAttrs, BaseDoc} from ".";

export interface SubscriptionAttrs extends BaseAttrs {
  expireAt: Moment;
  expired: boolean;
  user_id: Schema.Types.ObjectId;
}

export interface SubscriptionDoc extends BaseDoc {
  expireAt: Date;
  expired: boolean;
  user_id: Schema.Types.ObjectId;
}
