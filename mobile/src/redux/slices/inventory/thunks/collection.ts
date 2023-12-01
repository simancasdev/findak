import {PREFIX} from "../helper";
import {api} from "src/services";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {thunkBadRequest} from "src/redux/thunk.bad-request";
import {
  ButtonLoaderId,
  CollectionModel,
  CreateCollectionPayload,
} from "src/interfaces";
import {
  go,
  showAlert,
  toggleButtonLoader,
  CREATE_COLLECTION_LOADER,
} from "../../";

export const getMyCollection = createAsyncThunk(
  `${PREFIX}/get/user/collection`,
  async (_, thunkAPI): Promise<CollectionModel[] | undefined> => {
    try {
      return await api.Get<CollectionModel[]>("/collections/me");
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    }
  }
);

export const createCollection = createAsyncThunk(
  `${PREFIX}/create/collection`,
  async (
    payload: CreateCollectionPayload,
    thunkAPI
  ): Promise<CollectionModel | undefined> => {
    try {
      const created = await api.Post<CollectionModel>("/collections", payload);

      thunkAPI.dispatch(go({route: "ManageCollection"}));
      thunkAPI.dispatch(getMyCollection());
      thunkAPI.dispatch(
        showAlert({
          translate: true,
          type: "success",
          message: "collection_created",
        })
      );

      return created;
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    } finally {
      thunkAPI.dispatch(toggleButtonLoader(CREATE_COLLECTION_LOADER));
    }
  }
);

export const updateCollection = createAsyncThunk(
  `${PREFIX}/update/collection`,
  async (
    payload: CreateCollectionPayload & {id: string},
    thunkAPI
  ): Promise<void> => {
    const {id, ...rest} = payload;
    try {
      await api.Put<CollectionModel>(`/collections/${id}`, rest);

      thunkAPI.dispatch(getMyCollection());
      thunkAPI.dispatch(go({route: "ManageCollection"}));
      thunkAPI.dispatch(
        showAlert({
          translate: true,
          type: "success",
          message: "collection_updated_successfully",
        })
      );
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    } finally {
      thunkAPI.dispatch(toggleButtonLoader(CREATE_COLLECTION_LOADER));
    }
  }
);

export const removeCollection = createAsyncThunk(
  `${PREFIX}/remove/collection`,
  async (
    payload: {collectionId: string; loaderId: ButtonLoaderId},
    thunkAPI
  ): Promise<CollectionModel | undefined> => {
    const {collectionId, loaderId} = payload;
    try {
      const removed = await api.Delete<CollectionModel>(
        `/collections/${collectionId}`
      );

      thunkAPI.dispatch(
        showAlert({
          translate: true,
          type: "success",
          message: "collection_removed_successfully",
        })
      );

      return removed;
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    } finally {
      thunkAPI.dispatch(toggleButtonLoader(loaderId));
    }
  }
);
