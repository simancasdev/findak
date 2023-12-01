import {useCallback} from "react";
import {List} from "src/components/@system";
import {useNavigation} from "@react-navigation/native";
import {
  syncUser,
  openSheet,
  showAlert,
  updateUser,
  closeSheet,
  selectAuthState,
} from "src/redux/slices";
import {
  useLang,
  useAppDispatch,
  useAppSelector,
  useListLocation,
  useEffectWhenIsFocused,
} from "src/hooks";

export const useViewActions = () => {
  const {t} = useLang();
  const {goBack} = useNavigation();
  const dispatch = useAppDispatch();
  const {location} = useAppSelector(selectAuthState)["user"];
  const {city, country} = location;
  const {
    data,
    cities,
    payload,
    onChange,
    countries,
    locationType,
    setLocationType,
  } = useListLocation({country_id: country["id"], city_id: city["id"]});

  useEffectWhenIsFocused(() => {
    dispatch(
      openSheet({
        showBackdrop: false,
        snapPoints: ["65%", "69%"],
        enablePanDownToClose: false,
        view: (
          <List
            data={data ?? []}
            contentInset={{bottom: 100}}
            defaultValue={payload[locationType]}
            UIProps={{title: t("update_your_location")}}
            onSelect={(id) => {
              onChange(locationType, id as string);
            }}
          />
        ),
      })
    );
  }, [data]);

  const onUpdateUser = useCallback(() => {
    dispatch(
      updateUser({
        // @ts-ignore
        user: {location: payload},
        callback: () => {
          goBack();
          dispatch(syncUser());
          dispatch(closeSheet());
          dispatch(
            showAlert({
              type: "success",
              message: "your_location_has_been_updated",
            })
          );
        },
      })
    );
  }, [payload]);

  return {payload, cities, countries, setLocationType, onUpdateUser};
};
