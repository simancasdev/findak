import {go} from "../navigator";
import {api} from "src/services";
import {initAuthorizedApp} from ".";
import {closeDialog} from "../dialog";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {thunkBadRequest} from "../../thunk.bad-request";
import {SIGN_UP_PATH_REDIRECTION, PREFIX} from "./helper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  UserModel,
  RootState,
  LoginPayload,
  SignUpPayload,
} from "src/interfaces";
import {
  LOGIN_LOADER,
  SIGN_UP_LOADER,
  showScreenLoader,
  toggleButtonLoader,
  showOverlapAuthenticatingScreen,
} from "../loader";

const setTokenOnStorage = async (token: string): Promise<void> => {
  await AsyncStorage.setItem("@auth-token", token);
};

export const login = createAsyncThunk(
  `${PREFIX}/login`,
  async (payload: LoginPayload, thunkAPI): Promise<UserModel | undefined> => {
    thunkAPI.dispatch(toggleButtonLoader(LOGIN_LOADER));
    try {
      const user = await api.Post<UserModel & {token: string}>(
        "/auth/login",
        payload
      );
      const {token, sign_up_status} = user;
      await setTokenOnStorage(token);

      if (sign_up_status === "completed") {
        thunkAPI.dispatch(initAuthorizedApp(true));
      } else {
        thunkAPI.dispatch(
          go({route: SIGN_UP_PATH_REDIRECTION[sign_up_status]})
        );
      }

      return user;
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    } finally {
      thunkAPI.dispatch(toggleButtonLoader(LOGIN_LOADER));
    }
  }
);

export const signUp = createAsyncThunk(
  `${PREFIX}/sign-up`,
  async (payload: SignUpPayload, thunkAPI): Promise<UserModel | undefined> => {
    thunkAPI.dispatch(toggleButtonLoader(SIGN_UP_LOADER));

    try {
      const {confirm_password, ...args} = payload;
      const user = await api.Post<UserModel & {token: string}>(
        "/auth/sign-up",
        args
      );
      await setTokenOnStorage(user["token"]);
      thunkAPI.dispatch(go({route: "PhoneVerification"}));

      return user;
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    } finally {
      thunkAPI.dispatch(toggleButtonLoader(SIGN_UP_LOADER));
    }
  }
);

export const authenticate = createAsyncThunk(
  `${PREFIX}/authenticate`,
  async (_, thunkAPI): Promise<UserModel | undefined> => {
    thunkAPI.dispatch(showOverlapAuthenticatingScreen(true));

    try {
      const tokenOnStorage = await AsyncStorage.getItem("@auth-token");
      if (!tokenOnStorage) throw new Error("User not authenticated");
      // prettier-ignore
      const {user, token} = await api.Get<{user: UserModel, token: string}>("/auth/authenticate");
      const {sign_up_status} = user;
      await setTokenOnStorage(token);

      if (sign_up_status === "completed") {
        thunkAPI.dispatch(initAuthorizedApp(true));
      } else {
        thunkAPI.dispatch(
          go({route: SIGN_UP_PATH_REDIRECTION[sign_up_status]})
        );
      }

      return user;
    } finally {
      thunkAPI.dispatch(showOverlapAuthenticatingScreen(false));
    }
  }
);

export const syncUser = createAsyncThunk(
  `${PREFIX}/sync/user`,
  async (
    params: {onSyncSuccess: () => void} | undefined
  ): Promise<UserModel | undefined> => {
    try {
      const {user, token} = await api.Get<{user: UserModel; token: string}>(
        "/auth/authenticate"
      );
      await setTokenOnStorage(token);
      if (params) params["onSyncSuccess"]();
      return user;
    } catch (error) {
      console.log(error);
    }
  }
);

export const logOut = createAsyncThunk(
  `${PREFIX}/log/out`,
  async (_, thunkAPI): Promise<void> => {
    thunkAPI.dispatch(showScreenLoader({show: true}));
    try {
      await AsyncStorage.removeItem("@auth-token");
      thunkAPI.dispatch(initAuthorizedApp(false));
      thunkAPI.dispatch(closeDialog());
      await AsyncStorage.removeItem("@theme");
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    } finally {
      thunkAPI.dispatch(showScreenLoader({show: false}));
    }
  }
);

export const deleteAccount = createAsyncThunk(
  `${PREFIX}/delete/account`,
  async (_, thunkAPI): Promise<void> => {
    thunkAPI.dispatch(showScreenLoader({show: true}));
    const {id: userId} = (thunkAPI.getState() as RootState)["auth"]["user"];
    try {
      await api.Delete<UserModel>(`/users/${userId}`);
      await AsyncStorage.removeItem("@auth-token");
      thunkAPI.dispatch(closeDialog());
      thunkAPI.dispatch(initAuthorizedApp(false));
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    } finally {
      thunkAPI.dispatch(showScreenLoader({show: false}));
    }
  }
);
