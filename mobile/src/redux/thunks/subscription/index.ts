import {PREFIX} from "./prefix";
import {api} from "src/services";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {thunkBadRequest} from "../../thunk.bad-request";
import {go, showScreenLoader, syncUser} from "../../slices";
import {RootState, SubscriptionModel} from "src/interfaces";

export const becomePremium = createAsyncThunk(
  `${PREFIX}/become/premium/succeed`,
  async (_, thunkAPI): Promise<void> => {
    thunkAPI.dispatch(showScreenLoader({show: true}));
    const {auth} = thunkAPI.getState() as RootState;
    const {authUserId} = auth;

    try {
      await api.Post<SubscriptionModel>("/subscriptions/become/premium", {
        user_id: authUserId,
      });

      thunkAPI.dispatch(
        syncUser({
          onSyncSuccess: () => {
            thunkAPI.dispatch(go({route: "Congratulations"}));
          },
        })
      );
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    } finally {
      thunkAPI.dispatch(showScreenLoader({show: false}));
    }
  }
);
