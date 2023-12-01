import {BaseModel, StarValue, UserModel} from ".";

export interface FeedbackModel extends BaseModel {
  to: UserModel;
  from: UserModel;
  feedback: string;
  stars: StarValue;
}
