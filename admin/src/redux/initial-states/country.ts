import {BASE_STATE} from "./base.state";
import {CountryModel} from "../../interfaces";

export const INITIAL_COUNTRY: CountryModel = {
  ...BASE_STATE,
  name: "",
};
