import {api} from "services";
import {PREFIX} from "./helper";
import {showAlert} from "../alert";
import {List, UserModel} from "interfaces";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk(
  `${PREFIX}/get/users`,
  async (_, thunkAPI): Promise<List<UserModel[]> | undefined> => {
    try {
      return await api.Get<List<UserModel[]>>("/users");
    } catch (error) {
      const message = (error as Error).message;
      thunkAPI.dispatch(showAlert({message, type: "error", translate: false}));
    }
  }
);
