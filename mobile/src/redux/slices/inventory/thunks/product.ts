import {PREFIX} from "../helper";
import {api} from "src/services";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {thunkBadRequest} from "src/redux/thunk.bad-request";
import {ProductModel, UploadProductPayload} from "src/interfaces";
import {
  closeSheet,
  closeDialog,
  showScreenLoader,
  toggleButtonLoader,
  DELETE_PRODUCT_LOADER,
} from "../../";

export const getMyProducts = createAsyncThunk(
  `${PREFIX}/get/my/products`,
  async (_, thunkAPI): Promise<ProductModel[] | undefined> => {
    try {
      return await api.Get<ProductModel[]>("/products/me");
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    }
  }
);

export const uploadProduct = createAsyncThunk(
  `${PREFIX}/upload/product`,
  async (
    payload: UploadProductPayload & {onSuccessCallback: () => void},
    thunkAPI
  ): Promise<void> => {
    const {onSuccessCallback, ...rest} = payload;
    thunkAPI.dispatch(showScreenLoader({show: true, message: "almost_ready"}));
    try {
      await api.Post<ProductModel>("/products", rest);
      onSuccessCallback();
      thunkAPI.dispatch(getMyProducts());
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    } finally {
      thunkAPI.dispatch(showScreenLoader({show: false}));
    }
  }
);

export const updateProduct = createAsyncThunk(
  `${PREFIX}/update/product`,
  async (
    payload: UploadProductPayload & {onSuccessCallback: () => void; id: string},
    thunkAPI
  ): Promise<void> => {
    const {onSuccessCallback, id, ...rest} = payload;
    thunkAPI.dispatch(showScreenLoader({show: true, message: "almost_ready"}));
    try {
      await api.Put<ProductModel>(`/products/${id}`, rest);
      onSuccessCallback();
      thunkAPI.dispatch(getMyProducts());
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    } finally {
      thunkAPI.dispatch(showScreenLoader({show: false}));
    }
  }
);

export const deleteProduct = createAsyncThunk(
  `${PREFIX}/delete/product`,
  async (productId: string, thunkAPI): Promise<ProductModel | undefined> => {
    thunkAPI.dispatch(toggleButtonLoader(DELETE_PRODUCT_LOADER));
    try {
      const product = await api.Delete<ProductModel>(`/products/${productId}`);
      thunkAPI.dispatch(closeDialog());
      thunkAPI.dispatch(closeSheet());
      thunkAPI.dispatch(getMyProducts());

      return product;
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    } finally {
      thunkAPI.dispatch(toggleButtonLoader(DELETE_PRODUCT_LOADER));
    }
  }
);
