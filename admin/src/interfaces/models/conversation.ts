import {UserModel, BaseModel, ConversationType, MessageModel} from ".";

export interface ConversationModel<T = undefined> extends BaseModel {
  unread_messages: T;
  sender: UserModel;
  receiver: UserModel;
  messages: MessageModel[];
  type: ConversationType;
}
