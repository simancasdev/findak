import {useCallback} from "react";
import {styleOS} from "src/styles";
import {useNavigation} from "@react-navigation/native";
import {getCategoriesByType, searchTypesOptions} from "src/utils";
import {Row, List, Column, BoxButton, Typography} from "src/components/@system";
import {
  useLang,
  useAppSelector,
  useAppDispatch,
  useListSearchAlert,
  useEffectWhenIsFocused,
} from "src/hooks";
import {
  syncUser,
  showAlert,
  openSheet,
  closeSheet,
  updateUser,
  selectAuthState,
  selectCategoryState,
} from "src/redux/slices";

export const useViewActions = () => {
  const {t} = useLang();
  const {goBack} = useNavigation();
  const dispatch = useAppDispatch();
  const {categories} = useAppSelector(selectCategoryState);
  const {preferences} = useAppSelector(selectAuthState)["user"];
  const {search_alert} = preferences;
  const {payload, onChange} = useListSearchAlert({
    category_id: search_alert["id"],
    type: search_alert["type"],
  });
  const {type, category_id} = payload;

  useEffectWhenIsFocused(() => {
    const data = getCategoriesByType(categories["data"], type);

    dispatch(
      openSheet({
        showBackdrop: false,
        snapPoints: ["70%", "72%"],
        enablePanDownToClose: false,
        view: (
          <Column gap={10}>
            <Typography fontSize={16} fontWeight={styleOS("500")}>
              {t("choose_the_category_of_your_business")}
            </Typography>
            <Row fullWidth>
              {searchTypesOptions.map(({label, image, searchType}, key) => (
                <BoxButton
                  key={key}
                  size={70}
                  image={image}
                  imageSize={25}
                  label={t(label)}
                  labelStyle={{fontSize: 11}}
                  isSelected={type === searchType}
                  onPress={() => {
                    onChange("type", searchType);
                    onChange("category_id", "");
                  }}
                />
              ))}
            </Row>
            <List
              autoTranslate
              data={data ?? []}
              contentInset={{bottom: 300}}
              defaultValue={category_id}
              onSelect={(id) => {
                if (!id) return;
                onChange("category_id", id as string);
              }}
            />
          </Column>
        ),
      })
    );
  }, [categories, payload]);

  const onUpdateUser = useCallback(() => {
    dispatch(
      updateUser({
        user: {
          // @ts-expect-error
          preferences: {search_alert: payload},
        },
        callback: () => {
          goBack();
          dispatch(syncUser());
          dispatch(closeSheet());
          dispatch(
            showAlert({
              type: "success",
              message: "your_search_preference_has_been_updated",
            })
          );
        },
      })
    );
  }, [payload]);

  return {categories, payload, onUpdateUser};
};
