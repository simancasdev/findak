import {APIStatus, CityModel, CountryModel, List, PanelType} from "interfaces";

export interface LocationSlice {
  cities: List<CityModel[]>;
  cityForm: Partial<CityModel>;
  countries: List<CountryModel[]>;
  countryForm: Partial<CountryModel>;
  APIStatus: {
    countries: APIStatus;
    cities: APIStatus;
  };
}

export type SetLocationFormPayload = {
  type: Exclude<PanelType, "categories-form">;
  body: CityModel | CountryModel;
};
