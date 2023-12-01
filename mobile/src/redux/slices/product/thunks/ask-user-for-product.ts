import {PREFIX} from "../helper";
import {api} from "src/services";
import {go} from "../../navigator";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {thunkBadRequest} from "src/redux/thunk.bad-request";
import {ConversationModel, AskUserForProductPayload} from "src/interfaces";
import {ASK_USER_FOR_PRODUCT_LOADER, toggleButtonLoader} from "../../loader";

export const askUserForProduct = createAsyncThunk(
  `${PREFIX}/ask/user/for/product`,
  async (payload: AskUserForProductPayload, thunkAPI): Promise<void> => {
    thunkAPI.dispatch(toggleButtonLoader(ASK_USER_FOR_PRODUCT_LOADER));

    try {
      const {
        type,
        product,
        receiver,
        id: conversation_id,
      } = await api.Post<ConversationModel>("/conversations", payload);

      thunkAPI.dispatch(
        go({
          route: "Chat",
          params: {
            type,
            product,
            conversation_id,
            withUser: receiver,
          },
        })
      );
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    } finally {
      thunkAPI.dispatch(toggleButtonLoader(ASK_USER_FOR_PRODUCT_LOADER));
    }
  }
);
