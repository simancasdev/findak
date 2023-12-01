import {PALETTE} from "src/styles";
import {NavigatorView} from "src/hoc";
import {getLocationName} from "src/utils";
import {useViewActions} from "./useViewActions";
import {useNavigation} from "@react-navigation/native";
import {useLang, useTheme, useAppDispatch} from "src/hooks";
import {UPDATE_USER_LOADER, closeSheet} from "src/redux/slices";
import {CheckCircle, ChevronLeft, City, Country} from "src/svg";
import {Column, RowButton, Screen, TopBar} from "src/components/@system";

interface MyLocationProps {}

export const MyLocation: React.FC<MyLocationProps> = () => {
  const {t} = useLang();
  const {colors} = useTheme();
  const {goBack} = useNavigation();
  const dispatch = useAppDispatch();
  // prettier-ignore
  const {payload, cities, countries, setLocationType, onUpdateUser} = useViewActions();
  const {country_id, city_id} = payload;

  return (
    <NavigatorView viewName="MyLocation">
      <Screen style={{paddingHorizontal: 15}}>
        <TopBar
          back={{
            icon: <ChevronLeft color={colors["WHITE_BLACK"]} />,
            label: t("your_location"),
            onPress: () => {
              goBack();
              dispatch(closeSheet());
            },
          }}
          action={{
            label: t("save"),
            onPress: onUpdateUser,
            loaderId: UPDATE_USER_LOADER,
            disabled: !(country_id && city_id),
          }}
        />
        <Column gap={5} marginVertical={20}>
          <RowButton
            onPress={() => setLocationType("country_id")}
            helperText={t("the_country_where_you_are_right_now")}
            icon={<Country size={14} color={PALETTE["WHITE"]} />}
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
            helperText={t("the_city_where_you_can_do_business")}
            icon={<City size={14} color={PALETTE["WHITE"]} />}
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
