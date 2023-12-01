import {APIStatus, ConversationModel, MessageModel} from "src/interfaces";

export interface MessengerSlice {
  allUnReadMessages: MessageModel[];
  chat: {
    messages: MessageModel[];
    conversation_id: string | undefined;
  };
  conversations: {
    tradeType: ConversationModel<MessageModel[]>[];
    productType: ConversationModel<MessageModel[]>[];
    regularType: ConversationModel<MessageModel[]>[];
  };
  APIStatus: {
    messages: APIStatus;
    sendingMessage: boolean;
    conversations: APIStatus;
  };
}
