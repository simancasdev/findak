import {api} from "services";
import {PREFIX} from "../helper";
import {showAlert} from "../../alert";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {CityModel, CreateCityPayload, List} from "interfaces";

export const getCities = createAsyncThunk(
  `${PREFIX}/get/cities`,
  async (_, thunkAPI): Promise<List<CityModel[]> | undefined> => {
    try {
      return await api.Get<List<CityModel[]>>("/cities");
    } catch (error) {
      const message = (error as Error).message;
      thunkAPI.dispatch(showAlert({message, type: "error", translate: false}));
    }
  }
);

export const createCity = createAsyncThunk(
  `${PREFIX}/create/city`,
  async (
    payload: CreateCityPayload,
    thunkAPI
  ): Promise<CityModel | undefined> => {
    try {
      const cityCreated = await api.Post<CityModel>("/cities", payload);
      return cityCreated;
    } catch (error) {
      const message = (error as Error).message;
      thunkAPI.dispatch(showAlert({message, type: "error", translate: false}));
    }
  }
);

export const updateCity = createAsyncThunk(
  `${PREFIX}/update/city`,
  async (payload: CityModel, thunkAPI): Promise<CityModel | undefined> => {
    const {id} = payload;
    try {
      const cityUpdated = await api.Put<CityModel>(`/cities/${id}`, payload);
      return cityUpdated;
    } catch (error) {
      const message = (error as Error).message;
      thunkAPI.dispatch(showAlert({message, type: "error", translate: false}));
    }
  }
);

export const deleteCity = createAsyncThunk(
  `${PREFIX}/delete/city`,
  async (cityId: string, thunkAPI): Promise<string | undefined> => {
    try {
      await api.Delete(`/cities/${cityId}`);
      return cityId;
    } catch (error) {
      const message = (error as Error).message;
      thunkAPI.dispatch(showAlert({message, type: "error", translate: false}));
    }
  }
);
