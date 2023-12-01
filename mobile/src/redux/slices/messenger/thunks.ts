import {PREFIX} from "./helper";
import {go} from "../navigator";
import {api} from "src/services";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {thunkBadRequest} from "../../thunk.bad-request";
import {
  toggleButtonLoader,
  SEND_MESSAGE_LOADER,
  SEND_REGULAR_MESSAGE_LOADER,
} from "../loader";
import {
  RootState,
  MessageModel,
  ConversationType,
  ConversationModel,
  SendMessagePayload,
  CreateConversationPayload,
} from "src/interfaces";

export const getChatMessages = createAsyncThunk(
  `${PREFIX}/get/messages`,
  async (
    conversation_id: string,
    thunkAPI
  ): Promise<
    {messages: MessageModel[]; conversation_id: string} | undefined
  > => {
    try {
      const messages = await api.Get<MessageModel[]>(
        `/messages/${conversation_id}`
      );

      // prettier-ignore
      const unreadMessageIndex = messages.findIndex((message) => !message.readed);
      // Once we get the chat messages successfully, we mark the unread messages as read
      if (unreadMessageIndex !== -1) {
        thunkAPI.dispatch(readMessages(conversation_id));
      }
      return {messages, conversation_id};
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    }
  }
);

export const getMyConversations = createAsyncThunk(
  `${PREFIX}/my/conversations`,
  async (
    _,
    thunkAPI
  ): Promise<
    | {conversations: ConversationModel<MessageModel[]>[]; authUserId: string}
    | undefined
  > => {
    const {authUserId} = (thunkAPI.getState() as RootState)["auth"];
    try {
      const conversations = await api.Get<ConversationModel<MessageModel[]>[]>(
        "/conversations/me"
      );
      return {conversations, authUserId};
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    }
  }
);

export const sendMessage = createAsyncThunk(
  `${PREFIX}/send/messages`,
  async (
    payload: SendMessagePayload,
    thunkAPI
  ): Promise<(MessageModel & {type: ConversationType}) | undefined> => {
    thunkAPI.dispatch(toggleButtonLoader(SEND_MESSAGE_LOADER));
    const {type, ...rest} = payload;
    const {conversation_id} = (thunkAPI.getState() as RootState)["messenger"][
      "chat"
    ];
    try {
      const message = await api.Post<MessageModel>("/messages", {
        ...rest,
        conversation_id,
      });
      return {...message, type};
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    } finally {
      thunkAPI.dispatch(toggleButtonLoader(SEND_MESSAGE_LOADER));
    }
  }
);

export const readMessages = createAsyncThunk(
  `${PREFIX}/read/messages`,
  async (
    conversationId: string,
    thunkAPI
  ): Promise<MessageModel | undefined> => {
    try {
      return await api.Get<MessageModel>(`/messages/read/${conversationId}`);
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    }
  }
);

export const createConversation = createAsyncThunk(
  `${PREFIX}/create/conversation`,
  async (
    {receiver_id}: Omit<CreateConversationPayload, "sender_id" | "type">,
    thunkAPI
  ): Promise<void> => {
    thunkAPI.dispatch(toggleButtonLoader(SEND_REGULAR_MESSAGE_LOADER));
    const {authUserId} = (thunkAPI.getState() as RootState)["auth"];
    const newConversation: CreateConversationPayload = {
      receiver_id,
      type: "regular",
      sender_id: authUserId,
    };
    try {
      const {
        type,
        receiver,
        id: conversation_id,
      } = await api.Post<ConversationModel>("/conversations", newConversation);

      thunkAPI.dispatch(
        go({
          route: "Chat",
          params: {
            type,
            conversation_id,
            withUser: receiver,
          },
        })
      );
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    } finally {
      thunkAPI.dispatch(toggleButtonLoader(SEND_REGULAR_MESSAGE_LOADER));
    }
  }
);
