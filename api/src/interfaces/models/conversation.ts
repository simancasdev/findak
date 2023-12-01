import {Schema} from "mongoose";
import {BaseAttrs, BaseDoc, ConversationType} from ".";

export interface ConversationAttrs extends BaseAttrs {
  type: ConversationType;
  sender_id: Schema.Types.ObjectId;
  product_id?: Schema.Types.ObjectId;
  receiver_id: Schema.Types.ObjectId;
}

export interface ConversationDoc extends BaseDoc {
  type: ConversationType;
  sender_id: Schema.Types.ObjectId;
  product_id?: Schema.Types.ObjectId;
  receiver_id: Schema.Types.ObjectId;
}
