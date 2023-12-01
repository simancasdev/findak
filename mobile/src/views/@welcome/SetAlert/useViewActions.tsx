import {useCallback} from "react";
import {styleOS} from "src/styles";
import {getCategoriesByType, searchTypesOptions} from "src/utils";
import {List, Column, Typography, Row, BoxButton} from "src/components/@system";
import {
  syncUser,
  openSheet,
  updateUser,
  closeSheet,
  initAuthorizedApp,
  selectCategoryState,
} from "src/redux/slices";
import {
  useLang,
  useAppDispatch,
  useAppSelector,
  useListSearchAlert,
  useEffectWhenIsFocused,
} from "src/hooks";

export const useViewActions = () => {
  const {t} = useLang();
  const dispatch = useAppDispatch();
  const {payload, onChange} = useListSearchAlert();
  const {categories} = useAppSelector(selectCategoryState);
  const {type, category_id} = payload;

  useEffectWhenIsFocused(() => {
    const data = getCategoriesByType(categories["data"], type);

    dispatch(
      openSheet({
        showBackdrop: false,
        snapPoints: ["65%", "70%"],
        enablePanDownToClose: false,
        view: (
          <Column gap={10}>
            <Typography fontSize={18} fontWeight={styleOS("500")}>
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
  }, [categories, type, category_id]);

  const onUpdateUser = useCallback(() => {
    dispatch(
      updateUser({
        user: {
          // @ts-expect-error
          preferences: {search_alert: payload},
          sign_up_status: "completed",
        },
        callback: () => {
          dispatch(syncUser());
          dispatch(initAuthorizedApp(true));
          dispatch(closeSheet());
        },
      })
    );
  }, [payload]);

  return {payload, onUpdateUser};
};
