import {ConversationModel, MessageModel} from "src/interfaces";

export const PREFIX = "messenger";

export const addUnreadMessages = (
  conversations: ConversationModel<MessageModel[]>[],
  authUserId: string
): {
  conversationsUpdated: ConversationModel<MessageModel[]>[];
  allUnReadMessages: MessageModel[];
} => {
  const allUnReadMessages: MessageModel[] = [];
  let conversationsUpdated = conversations.map((conversation) => {
    const unreadMessages: MessageModel[] = [];
    const {messages} = conversation;
    for (let i = 0; i < messages.length; i++) {
      if (messages[i]["user_id"] !== authUserId && !messages[i]["readed"]) {
        unreadMessages.push(messages[i]);
        allUnReadMessages.push(messages[i]);
      }
    }
    conversation["unread_messages"] = unreadMessages;
    return conversation;
  });
  conversationsUpdated = conversationsUpdated.sort((a, b) =>
    a.unread_messages.length > b.unread_messages.length ? -1 : 1
  );
  return {conversationsUpdated, allUnReadMessages};
};
