import {useAppSelector} from "./useAppSelector";
import {useAppDispatch} from "./useAppDispatch";
import {useCallback, useEffect, useState} from "react";
import {useEffectWhenIsFocused} from "./useEffectWhenIsFocused";
import {CityModel, CountryModel, SetLocationPayload} from "../interfaces";
import {getCities, getCountries, selectLocationState} from "../redux/slices";

type LocationType = "city_id" | "country_id";

export const useListLocation = (defaultValue: SetLocationPayload) => {
  const dispatch = useAppDispatch();
  const {countries, cities} = useAppSelector(selectLocationState);
  const [locationType, setLocationType] = useState<LocationType>("country_id");
  const [data, setData] = useState<CountryModel[] | CityModel[]>([]);
  const [payload, setPayload] = useState<SetLocationPayload>(
    defaultValue as SetLocationPayload
  );

  const onChange = useCallback(
    (key: keyof SetLocationPayload, value: string): void => {
      setPayload((prev) => {
        const {country_id} = prev;
        if (key === "city_id") {
          const cityFoundInCountry = cities["data"].find(
            (city) => city.country_id === country_id
          );
          // prettier-ignore
          if (typeof cityFoundInCountry === "undefined") setPayload(defaultValue);
        } else {
          setLocationType("city_id");
          return {city_id: "", country_id: value};
        }
        return {...prev, [key]: value};
      });
    },
    [countries, cities]
  );

  useEffect(() => {
    const {country_id} = payload;
    if (locationType === "city_id") {
      setData(cities["data"].filter((city) => city.country_id === country_id));
    } else {
      setData(countries["data"]);
    }
  }, [locationType, cities]);

  useEffectWhenIsFocused(() => {
    dispatch(getCountries());
    dispatch(getCities());
  }, []);

  useEffect(() => {
    setData(countries["data"]);
  }, [countries]);

  return {
    data,
    cities,
    payload,
    setData,
    onChange,
    countries,
    locationType,
    setLocationType,
  };
};
