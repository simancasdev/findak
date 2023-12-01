import {INITIAL_USER} from "./user";
import {BASE_STATE} from "./base.state";
import {INITIAL_SEARCH} from "./search";
import {OfferModel} from "../../interfaces";

export const INITIAL_OFFER: OfferModel = {
  ...BASE_STATE,
  description: "string",
  receiver_id: "string",
  price: 0,
  status: "waiting",
  references_url: [],
  sender: INITIAL_USER,
  receiver: INITIAL_USER,
  search: INITIAL_SEARCH,
};
