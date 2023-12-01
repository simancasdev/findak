import {OfferModel} from "src/interfaces";

export type OfferVariant = "search_detail" | "inbox";

export type Context = {
  offer: OfferModel;
  variant: OfferVariant;
};
