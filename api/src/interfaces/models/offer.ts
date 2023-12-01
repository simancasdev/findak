import {Schema} from "mongoose";
import {OfferStatus, BaseAttrs, BaseDoc} from ".";

export interface OfferAttrs extends BaseAttrs {
  sender_id: Schema.Types.ObjectId;
  receiver_id: Schema.Types.ObjectId;
  search_id: Schema.Types.ObjectId;
  description: string;
  price: number;
  status: OfferStatus;
  references_url: string[];
}

export interface OfferDoc extends BaseDoc {
  sender_id: Schema.Types.ObjectId;
  receiver_id: Schema.Types.ObjectId;
  search_id: Schema.Types.ObjectId;
  description: string;
  price: number;
  status: OfferStatus;
  references_url: string[];
}
