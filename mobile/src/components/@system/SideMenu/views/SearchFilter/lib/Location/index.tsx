import {useLayoutEffect} from "react";
import {sanitizeCities} from "../../helper";
import {Skeleton} from "src/components/@skeletons";
import {useAppDispatch, useAppSelector, useLang} from "src/hooks";
import {ComponentManager, List} from "src/components/@system";
import {
  getCities,
  selectAuthState,
  selectSearchState,
  selectLocationState,
  onChangeSearchFilter,
} from "src/redux/slices";

interface LocationProps {}

export const Location: React.FC<LocationProps> = () => {
  const {t} = useLang();
  const dispatch = useAppDispatch();
  const {user} = useAppSelector(selectAuthState);
  const {buildingFilters} = useAppSelector(selectSearchState);
  // prettier-ignore
  const {cities, APIStatus: LocationAPIStatus} = useAppSelector(selectLocationState);
  const {cities: cityIds} = buildingFilters;

  useLayoutEffect(() => {
    dispatch(getCities());
  }, []);

  return (
    <ComponentManager
      data={cities["data"]}
      isError={LocationAPIStatus["cities"]["error"]}
      error={{tryAgain: () => dispatch(getCities())}}
      isLoading={LocationAPIStatus["cities"]["isLoading"]}
      skeleton={{placeholder: <Skeleton.ListItem />, howMany: 7}}
      emptyUI={{
        helperText: t("try_another_time"),
        title: t("there_are_no_cities_to_show"),
      }}
    >
      <List
        multipleSelection
        defaultValue={cityIds}
        data={sanitizeCities(cities["data"], user)}
        onSelect={(ids) => {
          dispatch(
            onChangeSearchFilter({
              cities: ids as unknown as string[],
            })
          );
        }}
      />
    </ComponentManager>
  );
};
