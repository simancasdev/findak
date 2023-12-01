import {MessengerSlice} from "./types";
import {SET_API_STATUS} from "../status.api";

export const initialState: MessengerSlice = {
  allUnReadMessages: [],
  conversations: {
    tradeType: [],
    productType: [],
    regularType: [],
  },
  chat: {
    messages: [],
    conversation_id: undefined,
  },
  APIStatus: {
    messages: SET_API_STATUS("initial"),
    sendingMessage: false,
    conversations: SET_API_STATUS("initial"),
  },
};
