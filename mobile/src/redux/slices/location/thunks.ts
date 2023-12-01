import {PREFIX} from "./helper";
import {api} from "src/services";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {thunkBadRequest} from "../../thunk.bad-request";
import {CityModel, CountryModel, List} from "src/interfaces";

export const getCountries = createAsyncThunk(
  `${PREFIX}/get/countries`,
  async (_, thunkAPI): Promise<List<CountryModel[]> | undefined> => {
    try {
      return await api.Get<List<CountryModel[]>>("/countries");
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    }
  }
);

export const getCities = createAsyncThunk(
  `${PREFIX}/get/cities`,
  async (_, thunkAPI): Promise<List<CityModel[]> | undefined> => {
    try {
      return await api.Get<List<CityModel[]>>("/cities");
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    }
  }
);
