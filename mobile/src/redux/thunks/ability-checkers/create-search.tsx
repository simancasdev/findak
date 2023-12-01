import {t} from "i18next";
import {PREFIX} from "./prefix";
import {api} from "src/services";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {CanICreateSearchPayload, RootState} from "src/interfaces";
import {DEFAULT_SNAP_POINTS} from "../../slices/bottom-sheet/helper";
import {openSheet, toggleButtonLoader, closeSheet} from "../../slices";
import {CreateSearch, UpgradeAccount} from "src/components/@sheet-views";
import {CREATE_SEARCH_SNAP_POINTS} from "src/components/@sheet-views/CreateSearch/sheet-snap-points";

const continueFlow = (thunkAPI: any) => {
  thunkAPI.dispatch(
    openSheet({
      view: <CreateSearch />,
      enablePanDownToClose: true,
      snapPoints: CREATE_SEARCH_SNAP_POINTS["select-search-type"],
      onBackdrop: () => thunkAPI.dispatch(closeSheet()),
    })
  );
};

export const canICreateSearch = createAsyncThunk(
  `${PREFIX}/can/create/search`,
  async ({loaderId}: CanICreateSearchPayload, thunkAPI): Promise<void> => {
    const {isAuthUserPremium} = (thunkAPI.getState() as RootState)["auth"];
    thunkAPI.dispatch(toggleButtonLoader(loaderId));

    try {
      if (isAuthUserPremium) {
        continueFlow(thunkAPI);
      } else {
        await api.Get("/users/ability/checker?flow=create-search");
        continueFlow(thunkAPI);
      }
    } catch (error) {
      // show sheet to ask user to upgrade their account or watch an ad
      thunkAPI.dispatch(
        openSheet({
          snapPoints: DEFAULT_SNAP_POINTS["UPGRADE_ACCOUNT"],
          view: (
            <UpgradeAccount
              reason={{type: "create-search"}}
              title={t("you_have_reached_the_maximum_number_of_searches")}
              helperText={t("to_create_this_search_we_offer_you_two_options")}
            />
          ),
        })
      );
    } finally {
      thunkAPI.dispatch(toggleButtonLoader(loaderId));
    }
  }
);
