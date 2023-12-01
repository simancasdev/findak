import {sendMessage} from "../thunks";
import {MessengerSlice} from "../types";
import {ActionReducerMapBuilder, current} from "@reduxjs/toolkit";

export const SEND_MESSAGE_REDUCER = (
  builder: ActionReducerMapBuilder<MessengerSlice>
) => {
  builder.addCase(sendMessage.pending, (state) => {
    state["APIStatus"]["sendingMessage"] = true;
  });

  builder.addCase(sendMessage.fulfilled, (state, action) => {
    const message = action.payload;
    if (typeof message === "undefined") return;
    const {type, ...rest} = message;

    const {conversations} = current(state);
    const listType = message["type"] === "regular" ? "regularType" : "tradeType";
    const conversationIndex = conversations[listType].findIndex(
      (conversation) => conversation["id"] === message["conversation_id"]
    );

    state["chat"]["messages"] = [...state["chat"]["messages"], message];
    state["APIStatus"]["sendingMessage"] = false;

    if (conversationIndex !== -1) {
      const conversationUpdated = conversations[listType][conversationIndex];
      state["conversations"][listType][conversationIndex] = {
        ...conversationUpdated,
        messages: [...conversationUpdated["messages"], message],
      };
    }
  });

  builder.addCase(sendMessage.rejected, (state) => {
    state["APIStatus"]["sendingMessage"] = false;
  });
};
