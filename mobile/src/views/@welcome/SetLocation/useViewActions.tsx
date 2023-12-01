import {useCallback} from "react";
import {List} from "src/components/@system";
import {openSheet, updateUser} from "src/redux/slices";
import {useNavigation} from "@react-navigation/native";
import {SetLocationPayload, ViewParam} from "src/interfaces";
import {
  useLang,
  useAppDispatch,
  useListLocation,
  useEffectWhenIsFocused,
} from "src/hooks";

export const useViewActions = () => {
  const {t} = useLang();
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation<ViewParam<"SetAlert">>();
  const {
    data,
    cities,
    payload,
    onChange,
    countries,
    locationType,
    setLocationType,
  } = useListLocation({country_id: "", city_id: ""});

  useEffectWhenIsFocused(() => {
    dispatch(
      openSheet({
        showBackdrop: false,
        snapPoints: ["60%", "65%"],
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

  const onUpdateUser = useCallback(async (payload: SetLocationPayload) => {
    dispatch(
      updateUser({
        // @ts-ignore
        user: {location: payload, sign_up_status: "set_alert"},
        callback: () => {
          navigate("SetAlert");
        },
      })
    );
  }, []);

  return {cities, countries, setLocationType, payload, onUpdateUser};
};
