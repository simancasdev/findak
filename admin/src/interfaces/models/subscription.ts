import {BaseModel} from "./base";

export interface SubscriptionModel extends BaseModel {
  expireAt: Date;
  expired: boolean;
  user_id: string;
}
