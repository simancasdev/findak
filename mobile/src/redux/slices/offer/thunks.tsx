import {Send} from "src/svg";
import {PREFIX} from "./helper";
import {api} from "src/services";
import {PALETTE} from "src/styles";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {thunkBadRequest} from "../../thunk.bad-request";
import {
  go,
  showAlert,
  closeSheet,
  closeDialog,
  showScreenLoader,
  SEND_OFFER_LOADER,
  toggleButtonLoader,
  ACCEPT_OFFER_LOADER,
  DECLINE_OFFER_LOADER,
} from "../";
import {
  List,
  RootState,
  OfferModel,
  TradeModel,
  SendOfferPayload,
} from "src/interfaces";

export const getReceivedOffers = createAsyncThunk(
  `${PREFIX}/get/received/offers`,
  async (_, thunkAPI): Promise<List<OfferModel[]> | undefined> => {
    const {user} = (thunkAPI.getState() as RootState).auth;

    try {
      return await api.Get<List<OfferModel[]>>(
        `/offers?receiver_id=${user["id"]}`
      );
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    }
  }
);

export const getSentOffers = createAsyncThunk(
  `${PREFIX}/get/sent/offers`,
  async (_, thunkAPI): Promise<List<OfferModel[]> | undefined> => {
    const {user} = (thunkAPI.getState() as RootState).auth;

    try {
      return await api.Get<List<OfferModel[]>>(
        `/offers?sender_id=${user["id"]}`
      );
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    }
  }
);

export const getOffer = createAsyncThunk(
  `${PREFIX}/get/offer`,
  async (offerId: string, thunkAPI): Promise<OfferModel | undefined> => {
    try {
      return await api.Get<OfferModel>(`/offers/${offerId}`);
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    }
  }
);

export const sendOffer = createAsyncThunk(
  `${PREFIX}/send/offer`,
  async (payload: SendOfferPayload, thunkAPI): Promise<void> => {
    thunkAPI.dispatch(showScreenLoader({show: false}));
    thunkAPI.dispatch(toggleButtonLoader(SEND_OFFER_LOADER));
    try {
      await api.Post<OfferModel>("/offers", payload);
      thunkAPI.dispatch(closeSheet());
      thunkAPI.dispatch(
        showAlert({
          type: "success",
          icon: <Send color={PALETTE["WHITE"]} />,
          message: "your_offer_has_been_sent_successfully",
        })
      );
      thunkAPI.dispatch(getSentOffers());
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    } finally {
      thunkAPI.dispatch(toggleButtonLoader(SEND_OFFER_LOADER));
    }
  }
);

export const declineOffer = createAsyncThunk(
  `${PREFIX}/decline/offer`,
  async (offerId: string, thunkAPI): Promise<OfferModel | undefined> => {
    thunkAPI.dispatch(toggleButtonLoader(DECLINE_OFFER_LOADER));
    try {
      const declined = await api.Post<OfferModel>(`/offers/decline/${offerId}`);
      thunkAPI.dispatch(closeSheet());
      thunkAPI.dispatch(closeDialog());
      thunkAPI.dispatch(go({route: "Inbox"}));
      thunkAPI.dispatch(
        showAlert({
          type: "success",
          message: "offer_rejected",
        })
      );

      return declined;
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    } finally {
      thunkAPI.dispatch(toggleButtonLoader(DECLINE_OFFER_LOADER));
    }
  }
);

export const acceptOffer = createAsyncThunk(
  `${PREFIX}/accept/offer`,
  async (offerId: string, thunkAPI): Promise<OfferModel | undefined> => {
    thunkAPI.dispatch(toggleButtonLoader(ACCEPT_OFFER_LOADER));
    try {
      const {offer, trade} = await api.Post<{
        offer: OfferModel;
        trade: TradeModel;
      }>(`/offers/accept/${offerId}`);
      thunkAPI.dispatch(closeSheet());
      thunkAPI.dispatch(closeDialog());
      thunkAPI.dispatch(
        go({
          route: "Trades",
          onNavigated: () => {
            thunkAPI.dispatch(
              go({route: "Trade", params: {tradeId: trade["id"]}})
            );
          },
        })
      );
      thunkAPI.dispatch(
        showAlert({
          type: "success",
          message: "offer_accepted_start_your_transaction",
        })
      );

      return offer;
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    } finally {
      thunkAPI.dispatch(toggleButtonLoader(ACCEPT_OFFER_LOADER));
    }
  }
);

export const deleteMyOffer = createAsyncThunk(
  `${PREFIX}/delete/my/offer`,
  async (offerId: string, thunkAPI): Promise<OfferModel | undefined> => {
    thunkAPI.dispatch(showScreenLoader({show: true}));
    try {
      const deleted = await api.Delete<OfferModel>(`/offers/${offerId}`);
      thunkAPI.dispatch(closeSheet());
      thunkAPI.dispatch(closeDialog());
      thunkAPI.dispatch(
        showAlert({
          type: "success",
          message: "offer_successfully_removed",
        })
      );

      return deleted;
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    } finally {
      thunkAPI.dispatch(showScreenLoader({show: false}));
    }
  }
);
