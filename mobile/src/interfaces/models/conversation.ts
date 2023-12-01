import {
  UserModel,
  BaseModel,
  MessageModel,
  ProductModel,
  ConversationType,
} from ".";

export interface ConversationModel<T = undefined> extends BaseModel {
  unread_messages: T;
  sender: UserModel;
  receiver: UserModel;
  product?: ProductModel;
  type: ConversationType;
  messages: MessageModel[];
}
