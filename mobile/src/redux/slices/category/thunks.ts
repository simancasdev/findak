import {PREFIX} from "./helper";
import {api} from "src/services";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {List, CategoryModel} from "src/interfaces";
import {thunkBadRequest} from "../../thunk.bad-request";

export const getCategories = createAsyncThunk(
  `${PREFIX}/get/categories`,
  async (_, thunkAPI): Promise<List<CategoryModel[]> | undefined> => {
    try {
      return await api.Get<List<CategoryModel[]>>("/categories");
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    }
  }
);
