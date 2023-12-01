import {
  UserModel,
  PartnerType,
  ProductModel,
  ConversationType,
} from "../../../interfaces";

export type Context = {
  withUser: UserModel;
  product?: ProductModel;
  type: ConversationType;
  partnerType?: PartnerType;
};
