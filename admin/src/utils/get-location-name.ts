import {CityModel, CountryModel} from "../interfaces";

export const getLocationName = (
  list: CityModel[] | CountryModel[] = [],
  locationId: string
): string => {
  return list.find((location) => location.id === locationId)?.name ?? "";
};
