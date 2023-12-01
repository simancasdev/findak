import {BaseModel, OfferModel, SearchModel, TradeStatus, UserModel} from ".";

export interface TradeModel extends BaseModel {
  seller: UserModel;
  buyer: UserModel;
  offer: OfferModel;
  identifier: string;
  search: SearchModel;
  rejected_by: string;
  status: TradeStatus;
  conversation_id: string;
  approved_by_seller_at?: Date;
  approved_by_buyer_at?: Date;
}
