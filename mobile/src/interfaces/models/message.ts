import {BaseModel, UserModel} from ".";

export interface MessageModel extends BaseModel {
  message: string;
  readed: boolean;
  user: UserModel;
  user_id: string;
  conversation_id: string;
}
