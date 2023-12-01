import {PALETTE} from "src/styles";
import {NavigatorView} from "src/hoc";
import {getLocationName} from "src/utils";
import {useViewActions} from "./useViewActions";
import {useNavigation} from "@react-navigation/native";
import {useLang, useTheme, useAppDispatch} from "src/hooks";
import {CheckCircle, ChevronLeft, City, Country} from "src/svg";
import {UPDATE_USER_LOADER, closeSheet} from "src/redux/slices";
import {Column, RowButton, Screen, TopBar} from "src/components/@system";

interface SetLocationProps {}

export const SetLocation: React.FC<SetLocationProps> = () => {
  const {t} = useLang();
  const {colors} = useTheme();
  const {goBack} = useNavigation();
  const dispatch = useAppDispatch();
  const {payload, cities, countries, setLocationType, onUpdateUser} =
    useViewActions();
  const {city_id, country_id} = payload;

  return (
    <NavigatorView viewName="SetLocation">
      <Screen style={{paddingHorizontal: 15}}>
        <TopBar
          back={{
            label: t("where_are_you"),
            icon: <ChevronLeft color={colors["WHITE_BLACK"]} />,
            onPress: () => {
              goBack();
              dispatch(closeSheet());
            },
          }}
          action={{
            label: t("next"),
            loaderId: UPDATE_USER_LOADER,
            disabled: !(country_id && city_id),
            onPress: () => onUpdateUser(payload),
          }}
        />
        <Column gap={5} marginVertical={20}>
          <RowButton
            iconBoxColor={PALETTE["PRIMARY"]}
            icon={<Country color={PALETTE["WHITE"]} />}
            onPress={() => setLocationType("country_id")}
            helperText={t("the_country_where_you_are_right_now")}
            label={
              getLocationName(countries["data"], country_id) ??
              t("select_a_country")
            }
            rightIcon={
              country_id ? (
                <CheckCircle color={PALETTE["PRIMARY"]} />
              ) : undefined
            }
          />
          <RowButton
            iconBoxColor={PALETTE["SECONDARY"]}
            icon={<City color={PALETTE["WHITE"]} />}
            helperText={t("the_city_where_you_can_do_business")}
            label={
              getLocationName(cities["data"], city_id) ?? t("select_a_city")
            }
            rightIcon={
              city_id ? <CheckCircle color={PALETTE["PRIMARY"]} /> : undefined
            }
            onPress={() => {
              if (!country_id) return;
              setLocationType("city_id");
            }}
          />
        </Column>
      </Screen>
    </NavigatorView>
  );
};
