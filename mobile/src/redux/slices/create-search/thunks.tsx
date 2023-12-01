import {Send} from "src/svg";
import {PREFIX} from "./helper";
import {api} from "src/services";
import {PALETTE} from "src/styles";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {thunkBadRequest} from "../../thunk.bad-request";
import {SearchModel, NewSearchPayload} from "src/interfaces";
import {
  showAlert,
  closeSheet,
  showScreenLoader,
  toggleButtonLoader,
  CREATE_SEARCH_LOADER,
  onChangeCreateSearchStep,
} from "..";

export const createSearch = createAsyncThunk(
  `${PREFIX}/create/search`,
  async (payload: NewSearchPayload, thunkAPI): Promise<void> => {
    thunkAPI.dispatch(showScreenLoader({show: false}));
    thunkAPI.dispatch(toggleButtonLoader(CREATE_SEARCH_LOADER));
    try {
      await api.Post<SearchModel>("/searches", payload);
      thunkAPI.dispatch(closeSheet());
      thunkAPI.dispatch(
        showAlert({
          type: "success",
          icon: <Send color={PALETTE["WHITE"]} />,
          message: "your_search_has_been_sent_successfully",
        })
      );
      setTimeout(() => {
        thunkAPI.dispatch(onChangeCreateSearchStep("select-search-type"));
      }, 500);
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    } finally {
      thunkAPI.dispatch(toggleButtonLoader(CREATE_SEARCH_LOADER));
    }
  }
);
