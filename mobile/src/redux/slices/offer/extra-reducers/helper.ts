import {OfferModel} from "src/interfaces";

type OrganizerPayload = {
  waiting: OfferModel[];
  accepted: OfferModel[];
  declined: OfferModel[];
};

export const offerOrganizer = (list: OfferModel[] = []): OrganizerPayload => {
  const waiting: OfferModel[] = [];
  const accepted: OfferModel[] = [];
  const declined: OfferModel[] = [];

  for (const offer of list) {
    const {status} = offer;
    switch (status) {
      case "waiting":
        waiting.push(offer);
        break;
      case "accepted":
      case "trade_succeed":
        accepted.push(offer);
        break;
      case "declined":
      case "rejected_in_trade":
        declined.push(offer);
        break;
    }
  }

  return {waiting, accepted, declined};
};
