import moment from "moment";
import {PREFIX} from "./helper";
import {api} from "src/services";
import {sanitizeSearches} from "../search/helper";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {thunkBadRequest} from "../../thunk.bad-request";
import {List, RootState, SearchModel} from "src/interfaces";

export const getTrending = createAsyncThunk(
  `${PREFIX}/get`,
  async (_, thunkAPI): Promise<List<SearchModel[]> | undefined> => {
    const {country, id} = (thunkAPI.getState() as RootState)["auth"]["user"];
    const today = moment().format("YYYY-MM-DD");

    try {
      let searches = await api.Get<List<SearchModel[]>>(
        `/searches?country_id=${country["id"]}&createdAt=${today}`
      );

      searches["data"] = sanitizeSearches(searches["data"], id);
      return searches;
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    }
  }
);

export const getTrendingByCategory = createAsyncThunk(
  `${PREFIX}/get/by/category`,
  async (
    categoryId: string,
    thunkAPI
  ): Promise<List<SearchModel[]> | undefined> => {
    const {country, id} = (thunkAPI.getState() as RootState)["auth"]["user"];
    const today = moment().format("YYYY-MM-DD");

    try {
      let searches = await api.Get<List<SearchModel[]>>(
        `/searches?country_id=${country["id"]}&createdAt=${today}&categories=${categoryId}`
      );
      searches["data"] = sanitizeSearches(searches["data"], id);
      return searches;
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    }
  }
);
