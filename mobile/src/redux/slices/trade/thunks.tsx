import {Trades} from "src/svg";
import {PREFIX} from "./helper";
import {api} from "src/services";
import {PALETTE} from "src/styles";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {thunkBadRequest} from "../../thunk.bad-request";
import {DEFAULT_SNAP_POINTS} from "../bottom-sheet/helper";
import {List, TradeModel, UserModel} from "src/interfaces";
import {FeedbackTradeSucceed} from "src/components/@sheet-views";
import {ALERT_ICON_SIZE} from "src/components/@system/Alert/helper";
import {
  openSheet,
  showAlert,
  closeDialog,
  shootConfetti,
  toggleButtonLoader,
  APPROVE_TRADE_LOADER,
  DECLINE_TRADE_LOADER,
} from "..";

export const getTrades = createAsyncThunk(
  `${PREFIX}/get/trades`,
  async (_, thunkAPI): Promise<List<TradeModel[]> | undefined> => {
    try {
      return await api.Get<List<TradeModel[]>>(`/trades`);
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    }
  }
);

export const getTrade = createAsyncThunk(
  `${PREFIX}/get/trade`,
  async (tradeId: string, thunkAPI): Promise<TradeModel | undefined> => {
    try {
      return await api.Get<TradeModel>(`/trades/${tradeId}`);
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    }
  }
);

export const approveTrade = createAsyncThunk(
  `${PREFIX}/approved`,
  async (tradeId: string, thunkAPI): Promise<TradeModel | undefined> => {
    thunkAPI.dispatch(toggleButtonLoader(APPROVE_TRADE_LOADER));
    try {
      const {partner, trade} = await api.Post<{
        trade: TradeModel;
        partner: UserModel;
      }>(`/trades/approved/${tradeId}`);

      thunkAPI.dispatch(closeDialog());
      thunkAPI.dispatch(
        showAlert({
          type: "success",
          message: "purchase_completed_successfully",
          icon: <Trades size={ALERT_ICON_SIZE} color={PALETTE["WHITE"]} />,
        })
      );
      thunkAPI.dispatch(
        openSheet({
          showBackdrop: false,
          enablePanDownToClose: false,
          view: <FeedbackTradeSucceed to={partner} />,
          snapPoints: DEFAULT_SNAP_POINTS["FEEDBACK"],
        })
      );
      thunkAPI.dispatch(shootConfetti(true));

      return trade;
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    } finally {
      thunkAPI.dispatch(toggleButtonLoader(APPROVE_TRADE_LOADER));
    }
  }
);

export const declineTrade = createAsyncThunk(
  `${PREFIX}/decline`,
  async (tradeId: string, thunkAPI): Promise<TradeModel | undefined> => {
    thunkAPI.dispatch(toggleButtonLoader(DECLINE_TRADE_LOADER));
    try {
      const trade = await api.Post<TradeModel>(`/trades/decline/${tradeId}`);

      thunkAPI.dispatch(closeDialog());
      thunkAPI.dispatch(
        showAlert({
          type: "success",
          message: "the_transaction_has_been_canceled",
          icon: <Trades size={ALERT_ICON_SIZE} color={PALETTE["WHITE"]} />,
        })
      );

      return trade;
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    } finally {
      thunkAPI.dispatch(toggleButtonLoader(DECLINE_TRADE_LOADER));
    }
  }
);
