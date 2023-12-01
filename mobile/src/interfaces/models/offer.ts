import {BaseModel, OfferStatus, SearchModel, UserModel} from ".";

export interface OfferModel extends BaseModel {
  description: string;
  receiver_id: string;
  price: number;
  status: OfferStatus;
  references_url: string[];
  sender: UserModel;
  receiver: UserModel;
  search: SearchModel;
}
