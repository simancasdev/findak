import {PREFIX} from "./helper";
import {api} from "src/services";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {thunkBadRequest} from "src/redux/thunk.bad-request";
import {
  UserModel,
  RootState,
  ForgotPasswordPayload,
  ResetPasswordPayload,
} from "src/interfaces";
import {
  go,
  showAlert,
  onRecoverChange,
  toggleButtonLoader,
  FORGOT_PASSWORD_LOADER,
  RESET_PASSWORD_LOADER,
} from "..";

export const forgotPassword = createAsyncThunk(
  `${PREFIX}/forgot`,
  async (payload: ForgotPasswordPayload, thunkAPI): Promise<void> => {
    thunkAPI.dispatch(toggleButtonLoader(FORGOT_PASSWORD_LOADER));

    try {
      const {phone_number} = await api.Post<UserModel>(
        "/auth/forgot/password",
        payload
      );
      thunkAPI.dispatch(
        onRecoverChange({key: "recoverEmail", value: payload["email"]})
      );
      thunkAPI.dispatch(
        go({
          route: "VerifyCode",
          params: {
            phoneNumber: phone_number,
            onVerificationSucceed: () => {
              thunkAPI.dispatch(go({route: "ResetPassword"}));
            },
          },
        })
      );
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    } finally {
      thunkAPI.dispatch(toggleButtonLoader(FORGOT_PASSWORD_LOADER));
    }
  }
);

export const resetPassword = createAsyncThunk(
  `${PREFIX}/reset`,
  async ({password}: ResetPasswordPayload, thunkAPI): Promise<void> => {
    const {recoverEmail} = (thunkAPI.getState() as RootState)[
      "recoverPassword"
    ];
    thunkAPI.dispatch(toggleButtonLoader(RESET_PASSWORD_LOADER));

    try {
      await api.Post("/auth/reset/password", {email: recoverEmail, password});
      thunkAPI.dispatch(
        showAlert({message: "password_updated", type: "success"})
      );
      thunkAPI.dispatch(go({route: "Landing"}));
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    } finally {
      thunkAPI.dispatch(toggleButtonLoader(RESET_PASSWORD_LOADER));
    }
  }
);
