import {Schema} from "mongoose";
import {BaseAttrs, BaseDoc, TradeStatus} from ".";

export interface TradeAttrs extends BaseAttrs {
  identifier: string;
  status: TradeStatus;
  approved_by_buyer_at?: Date;
  approved_by_seller_at?: Date;
  buyer_id: Schema.Types.ObjectId;
  offer_id: Schema.Types.ObjectId;
  search_id: Schema.Types.ObjectId;
  seller_id: Schema.Types.ObjectId;
  rejected_by?: Schema.Types.ObjectId;
  conversation_id: Schema.Types.ObjectId;
}

export interface TradeDoc extends BaseDoc {
  identifier: string;
  status: TradeStatus;
  approved_by_buyer_at?: Date;
  approved_by_seller_at?: Date;
  buyer_id: Schema.Types.ObjectId;
  offer_id: Schema.Types.ObjectId;
  search_id: Schema.Types.ObjectId;
  seller_id: Schema.Types.ObjectId;
  rejected_by?: Schema.Types.ObjectId;
  conversation_id: Schema.Types.ObjectId;
}
