import {Schema} from "mongoose";
import {BaseAttrs, BaseDoc, PaymentType} from ".";

export interface PaymentAttrs extends BaseAttrs {
  amount: number;
  type: PaymentType;
  user_id: Schema.Types.ObjectId;
}

export interface PaymentDoc extends BaseDoc {
  amount: number;
  type: PaymentType;
  user_id: Schema.Types.ObjectId;
}
