import {NavigatorView} from "src/hoc";
import {getCategoryName} from "src/utils";
import {PALETTE, styleOS} from "src/styles";
import {ChevronLeft, Country} from "src/svg";
import {useViewActions} from "./useViewActions";
import {useNavigation} from "@react-navigation/native";
import {useLang, useTheme, useAppDispatch} from "src/hooks";
import {UPDATE_USER_LOADER, closeSheet} from "src/redux/slices";
import {
  Column,
  Screen,
  TopBar,
  RowButton,
  Typography,
} from "src/components/@system";

interface MySearchAlertProps {}

export const MySearchAlert: React.FC<MySearchAlertProps> = () => {
  const {t} = useLang();
  const {colors} = useTheme();
  const {goBack} = useNavigation();
  const dispatch = useAppDispatch();
  const {categories, payload, onUpdateUser} = useViewActions();
  const {category_id} = payload;

  return (
    <NavigatorView viewName="MySearchAlert">
      <Screen contentStyle={{paddingHorizontal: 15}}>
        <TopBar
          back={{
            icon: <ChevronLeft color={colors["WHITE_BLACK"]} />,
            label: t("search_alert"),
            onPress: () => {
              goBack();
              dispatch(closeSheet());
            },
          }}
          action={{
            label: t("save"),
            onPress: onUpdateUser,
            loaderId: UPDATE_USER_LOADER,
            disabled: !category_id.length,
          }}
        />
        <Column marginVertical={10}>
          <Column>
            <RowButton
              helperText={t("notify_me_when_people_search_for")}
              icon={<Country size={14} color={PALETTE["WHITE"]} />}
              onPress={() => {}}
              label={
                category_id
                  ? t(getCategoryName(categories["data"], category_id))
                  : t("select_a_category")
              }
            />
          </Column>
          <Typography fontSize={11} marginTop={10} fontWeight={styleOS("400")}>
            {t("we_will_notify_you_when_there_are_searches_related_to")}
          </Typography>
        </Column>
      </Screen>
    </NavigatorView>
  );
};
