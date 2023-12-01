import {api} from "services";
import {PREFIX} from "./helper";
import {showAlert} from "../alert";
import {LOCA_STORAGE_KEYS} from "constans";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {LoginPayload, UserModel} from "interfaces";

export const login = createAsyncThunk(
  `${PREFIX}/login`,
  async (payload: LoginPayload, thunkAPI): Promise<UserModel | undefined> => {
    try {
      const data = await api.Post<UserModel & {token: string}>(
        "/auth/login",
        payload
      );
      const {token, ...user} = data;
      localStorage.setItem(LOCA_STORAGE_KEYS["AUTH_TOKEN"], token);

      return user;
    } catch (error) {
      const message = (error as Error).message;
      thunkAPI.dispatch(showAlert({message, type: "error", translate: false}));
    }
  }
);

export const authenticate = createAsyncThunk(
  `${PREFIX}/authenticate`,
  async (_, thunkAPI): Promise<UserModel | undefined> => {
    const tokenOnStorage = localStorage.getItem(
      LOCA_STORAGE_KEYS["AUTH_TOKEN"]
    );
    try {
      if (!tokenOnStorage) throw new Error("User not authenticated");

      const {token, user} = await api.Get<{user: UserModel; token: string}>(
        "/auth/authenticate"
      );

      localStorage.setItem(LOCA_STORAGE_KEYS["AUTH_TOKEN"], token);
      return user;
    } catch (error) {
      const message = (error as Error).message;
      thunkAPI.dispatch(showAlert({message, type: "error", translate: false}));
    }
  }
);
