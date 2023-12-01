import {api} from "src/services";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {thunkBadRequest} from "../../thunk.bad-request";
import {UPDATE_USER_LOADER, toggleButtonLoader} from "../loader";
import {PREFIX, buildPeopleQuery, sanitizeUsers} from "./helper";
import {List, RootState, UpdateUserPayload, UserModel} from "src/interfaces";

export const getPeople = createAsyncThunk(
  `${PREFIX}/get/people`,
  async (_, thunkAPI): Promise<List<UserModel[]> | undefined> => {
    const {auth, user} = thunkAPI.getState() as RootState;
    const {user: userLogged, authUserId} = auth;
    const {buildingFilters} = user;
    const query = buildPeopleQuery(buildingFilters, userLogged);

    try {
      let users = await api.Get<List<UserModel[]>>(`/users${query}`);
      users["data"] = sanitizeUsers(users["data"], authUserId);
      return users;
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    }
  }
);

export const getUserProfile = createAsyncThunk(
  `${PREFIX}/get/user/profile`,
  async (userId: string, thunkAPI): Promise<UserModel | undefined> => {
    try {
      return await api.Get<UserModel>(`/users/${userId}`);
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    }
  }
);

export const updateUser = createAsyncThunk(
  `${PREFIX}/update`,
  async (
    payload: UpdateUserPayload,
    thunkAPI
  ): Promise<UserModel | undefined> => {
    thunkAPI.dispatch(toggleButtonLoader(UPDATE_USER_LOADER));

    const {user, callback} = payload;
    const {id: userId} = (thunkAPI.getState() as RootState)["auth"]["user"];

    try {
      const userUpdated = await api.Put<UserModel>(`/users/${userId}`, user);
      if (callback) callback();

      return userUpdated;
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    } finally {
      thunkAPI.dispatch(toggleButtonLoader(UPDATE_USER_LOADER));
    }
  }
);
