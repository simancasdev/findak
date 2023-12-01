import {INITIAL_USER} from "./user";
import {INITIAL_OFFER} from "./offer";
import {BASE_STATE} from "./base.state";
import {INITIAL_SEARCH} from "./search";
import {TradeModel} from "../../interfaces";

export const INITIAL_TRADE: TradeModel = {
  ...BASE_STATE,
  seller: INITIAL_USER,
  buyer: INITIAL_USER,
  offer: INITIAL_OFFER,
  search: INITIAL_SEARCH,
  rejected_by: "",
  status: "in_progress",
  identifier: "",
  conversation_id: "",
  approved_by_seller_at: new Date(),
  approved_by_buyer_at: new Date(),
};
