import {INITIAL_CITY} from "./city";
import {BASE_STATE} from "./base.state";
import {INITIAL_COUNTRY} from "./country";
import {UserModel} from "../../interfaces";
import {INITIAL_CATEGORY} from "./category";

export const INITIAL_USER: UserModel = {
  ...BASE_STATE,
  password: undefined,
  biography: "",
  email: "",
  first_name: "",
  last_name: "",
  avatar_url: "",
  slogan: "",
  level: "new",
  phone_number: "",
  cover_url: "",
  sign_up_status: "otp_verification",
  offers: [],
  trades: [],
  feedbacks: [],
  searches: [],
  city: INITIAL_CITY,
  products: [],
  country: INITIAL_COUNTRY,
  location: {
    city: INITIAL_CITY,
    country: INITIAL_COUNTRY,
  },
  preferences: {
    search_alert: INITIAL_CATEGORY,
  },
};
