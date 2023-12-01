import {APIStatus, CityModel, CountryModel, List} from "src/interfaces";

export interface LocationSlice {
  countries: List<CountryModel[]>;
  cities: List<CityModel[]>;
  APIStatus: {
    countries: APIStatus;
    cities: APIStatus;
  };
}
