import {INITIAL_CITY} from "./city";
import {INITIAL_USER} from "./user";
import {BASE_STATE} from "./base.state";
import {INITIAL_COUNTRY} from "./country";
import {INITIAL_CATEGORY} from "./category";
import {SearchModel} from "../../interfaces";

export const INITIAL_SEARCH: SearchModel = {
  ...BASE_STATE,
  budget: 0,
  description: "",
  type: "product",
  status: "created",
  references_url: [],
  user: INITIAL_USER,
  category: INITIAL_CATEGORY,
  product_status: "new_or_used",
  accept_prices_higher_than_my_budget: false,
  offers: [],
  comments: [],
  location: {
    city: INITIAL_CITY,
    country: INITIAL_COUNTRY,
  },
};
