import {api} from "services";
import {PREFIX} from "../helper";
import {showAlert} from "../../alert";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {CountryModel, CreateCountryPayload, List} from "interfaces";

export const getCountries = createAsyncThunk(
  `${PREFIX}/get/countries`,
  async (_, thunkAPI): Promise<List<CountryModel[]> | undefined> => {
    try {
      return await api.Get<List<CountryModel[]>>("/countries");
    } catch (error) {
      const message = (error as Error).message;
      thunkAPI.dispatch(showAlert({message, type: "error", translate: false}));
    }
  }
);

export const createCountry = createAsyncThunk(
  `${PREFIX}/create/country`,
  async (
    payload: CreateCountryPayload,
    thunkAPI
  ): Promise<CountryModel | undefined> => {
    try {
      const countryCreated = await api.Post<CountryModel>(
        "/countries",
        payload
      );
      return countryCreated;
    } catch (error) {
      const message = (error as Error).message;
      thunkAPI.dispatch(showAlert({message, type: "error", translate: false}));
    }
  }
);

export const updateCountry = createAsyncThunk(
  `${PREFIX}/update/country`,
  async (
    payload: CountryModel,
    thunkAPI
  ): Promise<CountryModel | undefined> => {
    const {id} = payload;
    try {
      const countryUpdated = await api.Put<CountryModel>(
        `/countries/${id}`,
        payload
      );
      return countryUpdated;
    } catch (error) {
      const message = (error as Error).message;
      thunkAPI.dispatch(showAlert({message, type: "error", translate: false}));
    }
  }
);

export const deleteCountry = createAsyncThunk(
  `${PREFIX}/delete/country`,
  async (countryId: string, thunkAPI): Promise<string | undefined> => {
    try {
      await api.Delete(`/countries/${countryId}`);
      return countryId;
    } catch (error) {
      const message = (error as Error).message;
      thunkAPI.dispatch(showAlert({message, type: "error", translate: false}));
    }
  }
);
