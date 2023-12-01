import {NavigatorView} from "src/hoc";
import {getCategoryName} from "src/utils";
import {PALETTE, styleOS} from "src/styles";
import {useViewActions} from "./useViewActions";
import {ChevronLeft, Product, Service} from "src/svg";
import {useNavigation} from "@react-navigation/native";
import {useLang, useTheme, useAppSelector} from "src/hooks";
import {UPDATE_USER_LOADER, selectCategoryState} from "src/redux/slices";
import {
  TopBar,
  Column,
  Screen,
  RowButton,
  Typography,
} from "src/components/@system";

interface SetAlertProps {}

export const SetAlert: React.FC<SetAlertProps> = () => {
  const {t} = useLang();
  const {colors} = useTheme();
  const {goBack} = useNavigation();
  const {categories} = useAppSelector(selectCategoryState);
  const {payload, onUpdateUser} = useViewActions();
  const {type, category_id} = payload;
  const isProduct = type === "product";

  return (
    <NavigatorView viewName="SetAlert">
      <Screen style={{paddingHorizontal: 15}}>
        <TopBar
          back={{
            icon: <ChevronLeft color={colors["WHITE_BLACK"]} />,
            label: t("search_alert"),
            onPress: () => {
              goBack();
            },
          }}
          action={{
            label: t("finish"),
            onPress: onUpdateUser,
            loaderId: UPDATE_USER_LOADER,
            disabled: !(category_id && type),
          }}
        />
        <Column marginVertical={10}>
          <Column>
            <RowButton
              iconBoxColor={PALETTE["PRIMARY"]}
              onPress={() => {}}
              label={
                category_id
                  ? t(getCategoryName(categories["data"], category_id))
                  : t("select_a_category")
              }
              icon={
                isProduct ? (
                  <Product color={PALETTE["WHITE"]} />
                ) : (
                  <Service color={PALETTE["WHITE"]} />
                )
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
