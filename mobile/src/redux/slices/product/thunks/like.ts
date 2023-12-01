import {PREFIX} from "../helper";
import {api} from "src/services";
import {LikeModel} from "src/interfaces";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {thunkBadRequest} from "src/redux/thunk.bad-request";
import {toggleButtonLoader, UPDATING_PRODUCT_LIKE_LOADER} from "../../loader";

export const likeIt = createAsyncThunk(
  `${PREFIX}/like/it`,
  async (productId: string, thunkAPI): Promise<LikeModel | undefined> => {
    try {
      return await api.Post<LikeModel>("/likes", {productId});
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    } finally {
      thunkAPI.dispatch(toggleButtonLoader(UPDATING_PRODUCT_LIKE_LOADER));
    }
  }
);

export const removeLike = createAsyncThunk(
  `${PREFIX}/remove/like`,
  async (productId: string, thunkAPI): Promise<LikeModel | undefined> => {
    try {
      return await api.Delete<LikeModel>(`/likes/${productId}`);
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    } finally {
      thunkAPI.dispatch(toggleButtonLoader(UPDATING_PRODUCT_LIKE_LOADER));
    }
  }
);
