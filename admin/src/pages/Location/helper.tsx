import {ShowPanelPayload} from "redux/slices/panel/types";
import {CityForm, CountryForm} from "components/@panel-variant";

export const countryPanelPayload: ShowPanelPayload = {
  type: "country-form",
  component: <CountryForm />,
};

export const cityPanelPayload: ShowPanelPayload = {
  type: "city-form",
  component: <CityForm />,
};
