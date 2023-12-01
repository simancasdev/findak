import {PREFIX} from "./prefix";
import {api} from "src/services";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {showScreenLoader} from "src/redux/slices";
import {thunkBadRequest} from "src/redux/thunk.bad-request";
import {CreatePaymentPayload, PaymentModel, RootState} from "src/interfaces";

export const createPayment = createAsyncThunk(
  `${PREFIX}/create`,
  async (
    {payment_type, amount, onSuccessCallback}: CreatePaymentPayload,
    thunkAPI
  ): Promise<void> => {
    thunkAPI.dispatch(showScreenLoader({show: true}));
    const {auth} = thunkAPI.getState() as RootState;
    const {authUserId} = auth;

    try {
      await api.Post<PaymentModel>("/payments", {
        user_id: authUserId,
        payment_type,
        amount,
      });
      if (typeof onSuccessCallback !== "undefined") onSuccessCallback();
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    } finally {
      thunkAPI.dispatch(showScreenLoader({show: false}));
    }
  }
);
