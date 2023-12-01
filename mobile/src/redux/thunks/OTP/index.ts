import {PREFIX} from "./prefix";
import {api} from "src/services";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {VerifySMSCodePayload} from "src/interfaces";
import {thunkBadRequest} from "src/redux/thunk.bad-request";
import {
  go,
  showAlert,
  updateUser,
  SEND_SMS_LOADER,
  toggleButtonLoader,
  VERIFY_SMS_CODE_LOADER,
} from "src/redux/slices";

export const OTPSMS = createAsyncThunk(
  `${PREFIX}/sms`,
  async (phone_number: string, thunkAPI): Promise<void> => {
    thunkAPI.dispatch(toggleButtonLoader(SEND_SMS_LOADER));
    try {
      await api.Post("/verification/send/sms", {
        phone_number,
        type: "registration",
      });
      thunkAPI.dispatch(
        go({
          route: "VerifyCode",
          params: {
            phoneNumber: phone_number,
            onVerificationSucceed: () => {
              thunkAPI.dispatch(
                updateUser({
                  user: {
                    sign_up_status: "complete_profile",
                    phone_number,
                  },
                  callback: () => {
                    thunkAPI.dispatch(go({route: "CompleteProfile"}));
                  },
                })
              );
            },
          },
        })
      );
    } catch (error) {
      thunkBadRequest(error, thunkAPI, "something_went_wrong");
    } finally {
      thunkAPI.dispatch(toggleButtonLoader(SEND_SMS_LOADER));
    }
  }
);

export const resendOTPSMS = createAsyncThunk(
  `${PREFIX}/resend/sms`,
  async (phone_number: string, thunkAPI): Promise<void> => {
    thunkAPI.dispatch(toggleButtonLoader(SEND_SMS_LOADER));
    try {
      await api.Post("/verification/send/sms", {
        phone_number,
        type: "registration",
      });
      thunkAPI.dispatch(showAlert({message: "code_sent", type: "success"}));
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    }
  }
);

export const verifySMScode = createAsyncThunk(
  `${PREFIX}/verify/sms/code`,
  async (
    payload: VerifySMSCodePayload & {onVerificationSucceed: () => void},
    thunkAPI
  ): Promise<void> => {
    const {onVerificationSucceed, ...body} = payload;
    thunkAPI.dispatch(toggleButtonLoader(VERIFY_SMS_CODE_LOADER));
    try {
      await api.Post("/verification/verify/code", body);
      onVerificationSucceed();
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    } finally {
      thunkAPI.dispatch(toggleButtonLoader(VERIFY_SMS_CODE_LOADER));
    }
  }
);
