import {ConversationType} from "src/interfaces/models";

export type CreateConversationPayload = {
  sender_id: string;
  receiver_id: string;
  type: ConversationType;
};
