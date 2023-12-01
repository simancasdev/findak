import {PREFIX} from "../helper";
import {api} from "src/services";
import {ProductModel} from "src/interfaces";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {thunkBadRequest} from "src/redux/thunk.bad-request";

export const getProduct = createAsyncThunk(
  `${PREFIX}/get`,
  async (productId: string, thunkAPI): Promise<ProductModel | undefined> => {
    try {
      return await api.Get<ProductModel>(`/products/${productId}`);
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    }
  }
);
