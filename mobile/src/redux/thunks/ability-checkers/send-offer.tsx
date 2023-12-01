import {t} from "i18next";
import {PREFIX} from "./prefix";
import {api} from "src/services";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {openSheet, toggleButtonLoader} from "../../slices";
import {DEFAULT_SNAP_POINTS} from "../../slices/bottom-sheet/helper";
import {SendOffer, UpgradeAccount} from "src/components/@sheet-views";
import {CanISendOfferPayload, RootState, SearchModel} from "src/interfaces";

const continueFlow = (thunkAPI: any, search: SearchModel) => {
  thunkAPI.dispatch(openSheet({view: <SendOffer search={search} />}));
};

export const canISendOffer = createAsyncThunk(
  `${PREFIX}/can/send/offer`,
  async ({loaderId, search}: CanISendOfferPayload, thunkAPI): Promise<void> => {
    const {isAuthUserPremium} = (thunkAPI.getState() as RootState)["auth"];
    thunkAPI.dispatch(toggleButtonLoader(loaderId));

    try {
      if (isAuthUserPremium) {
        continueFlow(thunkAPI, search);
      } else {
        await api.Get("/users/ability/checker?flow=send-offer");
        continueFlow(thunkAPI, search);
      }
    } catch (error) {
      // show sheet to ask user to upgrade their account or watch an ad
      thunkAPI.dispatch(
        openSheet({
          snapPoints: DEFAULT_SNAP_POINTS["UPGRADE_ACCOUNT"],
          view: (
            <UpgradeAccount
              reason={{type: "send-offer", payload: {search}}}
              title={t(
                "you_have_reached_the_maximum_number_of_offers_you_can_send"
              )}
              helperText={t(
                "we_know_you_want_to_keep_selling_we_offer_you_two_options"
              )}
            />
          ),
        })
      );
    } finally {
      thunkAPI.dispatch(toggleButtonLoader(loaderId));
    }
  }
);
