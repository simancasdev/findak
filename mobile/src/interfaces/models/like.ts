import {BaseModel, UserModel} from ".";

export interface LikeModel extends BaseModel {
  user_id: string;
  user: UserModel;
  product_id: string;
}
