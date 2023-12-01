import {ConversationType} from "src/interfaces/models";

export type SendMessagePayload = {
  message: string;
  type: ConversationType;
};
