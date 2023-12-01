import {APIStatus, OfferModel} from "src/interfaces";

export interface OfferSlice {
  offer: OfferModel;
  received: {
    waiting: OfferModel[];
    accepted: OfferModel[];
    declined: OfferModel[];
  };
  sent: {
    waiting: OfferModel[];
    accepted: OfferModel[];
    declined: OfferModel[];
  };
  APIStatus: {
    sent: APIStatus;
    offer: APIStatus;
    received: APIStatus;
  };
}
