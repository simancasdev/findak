import {api} from "services";
import {PREFIX} from "./helper";
import {showAlert} from "../alert";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {List, CategoryModel, CreateCategoryPayload} from "interfaces";

export const getCategories = createAsyncThunk(
  `${PREFIX}/get/categories`,
  async (_, thunkAPI): Promise<List<CategoryModel[]> | undefined> => {
    try {
      return await api.Get<List<CategoryModel[]>>("/categories");
    } catch (error) {
      const message = (error as Error).message;
      thunkAPI.dispatch(showAlert({message, type: "error", translate: false}));
    }
  }
);

export const createCategory = createAsyncThunk(
  `${PREFIX}/create/category`,
  async (
    payload: CreateCategoryPayload,
    thunkAPI
  ): Promise<CategoryModel | undefined> => {
    try {
      const categoryCreated = await api.Post<CategoryModel>(
        "/categories",
        payload
      );
      return categoryCreated;
    } catch (error) {
      const message = (error as Error).message;
      thunkAPI.dispatch(showAlert({message, type: "error", translate: false}));
    }
  }
);

export const updateCategory = createAsyncThunk(
  `${PREFIX}/update/category`,
  async (
    payload: CategoryModel,
    thunkAPI
  ): Promise<CategoryModel | undefined> => {
    const {id} = payload;
    try {
      const categoryUpdated = await api.Put<CategoryModel>(
        `/categories/${id}`,
        payload
      );
      return categoryUpdated;
    } catch (error) {
      const message = (error as Error).message;
      thunkAPI.dispatch(showAlert({message, type: "error", translate: false}));
    }
  }
);

export const deleteCategory = createAsyncThunk(
  `${PREFIX}/delete/category`,
  async (categoryId: string, thunkAPI): Promise<string | undefined> => {
    try {
      const response = await api.Delete(`/categories/${categoryId}`);
      return categoryId;
    } catch (error) {
      const message = (error as Error).message;
      thunkAPI.dispatch(showAlert({message, type: "error", translate: false}));
    }
  }
);
