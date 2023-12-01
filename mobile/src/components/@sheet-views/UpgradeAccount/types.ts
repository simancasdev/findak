import {SearchModel} from "src/interfaces";

type UpgradeByOffer = {
  type: "send-offer";
  payload: {
    search: SearchModel;
  };
};

type UpgradeByCreateSearch = {
  type: "create-search";
};

type UpgradeByMessenger = {
  type: "messenger";
};

type UpgradeReason =
  | UpgradeByOffer
  | UpgradeByMessenger
  | UpgradeByCreateSearch;

export interface UpgradeAccountProps {
  title: string;
  helperText: string;
  reason: UpgradeReason;
}
