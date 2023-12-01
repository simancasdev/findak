import {ConversationModel, MessageModel} from "src/interfaces";

type OrganizerPayload = {
  tradeConversations: ConversationModel<MessageModel[]>[];
  productConversations: ConversationModel<MessageModel[]>[];
  regularConversations: ConversationModel<MessageModel[]>[];
};

export const conversationOrganizer = (
  list: ConversationModel<MessageModel[]>[] = []
): OrganizerPayload => {
  const tradeConversations: ConversationModel<MessageModel[]>[] = [];
  const regularConversations: ConversationModel<MessageModel[]>[] = [];
  const productConversations: ConversationModel<MessageModel[]>[] = [];

  for (const conversation of list) {
    const {type} = conversation;
    switch (type) {
      case "regular":
        regularConversations.push(conversation);
        break;
      case "trade":
        tradeConversations.push(conversation);
        break;
      case "product":
        productConversations.push(conversation);
        break;

      default:
        console.error(`Conversation type: ${type} not handled`);
    }
  }

  return {tradeConversations, regularConversations, productConversations};
};
