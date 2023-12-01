import {MessengerSlice} from "../types";
import {getChatMessages} from "../thunks";
import {SET_API_STATUS} from "../../status.api";
import {ActionReducerMapBuilder} from "@reduxjs/toolkit";

export const MESSAGES_REDUCER = (
  builder: ActionReducerMapBuilder<MessengerSlice>
) => {
  builder.addCase(getChatMessages.pending, (state) => {
    state["APIStatus"]["messages"] = SET_API_STATUS("initial");
    state["chat"]["conversation_id"] = undefined;
  });

  builder.addCase(getChatMessages.fulfilled, (state, action) => {
    const payload = action.payload;
    if (typeof payload === "undefined") return;
    const {messages, conversation_id} = payload;

    state["chat"]["messages"] = messages;
    state["chat"]["conversation_id"] = conversation_id;
    state["APIStatus"]["messages"] = SET_API_STATUS("success");
  });

  builder.addCase(getChatMessages.rejected, (state) => {
    state["APIStatus"]["messages"] = SET_API_STATUS("error");
  });
};
