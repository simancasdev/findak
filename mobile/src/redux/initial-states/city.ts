import {BASE_STATE} from "./base.state";
import {CityModel} from "../../interfaces";

export const INITIAL_CITY: CityModel = {
  ...BASE_STATE,
  name: "",
  country_id: "",
};
