import {ConversationType} from "src/interfaces/models";

export type AskUserForProductPayload = {
  sender_id: string;
  product_id: string;
  receiver_id: string;
  type: ConversationType;
};
