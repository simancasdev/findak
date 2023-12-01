import {useLang} from "./useLang";
import {Skeleton} from "src/components/@skeletons";
import {useCallback, useEffect, useState} from "react";
import {BaseSheetProps, SearchType} from "src/interfaces";
import {DEFAULT_SNAP_POINTS} from "src/redux/slices/bottom-sheet/helper";
import {WIDTH_SCREEN, getCategoriesByType, searchTypesOptions} from "src/utils";
import {
  useAppDispatch,
  useAppSelector,
  useEffectWhenIsFocused,
  useEffectOnlyOnceWhenUserIsReady,
} from ".";
import {
  openSheet,
  getCategories,
  selectCategoryState,
  selectBottomSheetState,
} from "src/redux/slices";
import {
  Row,
  List,
  Column,
  Guideline,
  BoxButton,
  ComponentManager,
} from "src/components/@system";

type UseSheetConfig = Omit<BaseSheetProps, "view"> & {
  listeners?: any[];
  autoOpen?: boolean;
  title?: string | undefined;
  multipleSelection?: boolean;
  defaultSearchType?: SearchType;
  defaultCategoryIds: string | string[];
  onChangeType: (type: SearchType) => void;
  onChangeCategory: (value: string | string[]) => void;
};

const DEFAULT_SHEET_CONFIG: UseSheetConfig = {
  listeners: [],
  autoOpen: false,
  title: undefined,
  showBackdrop: false,
  onChangeType: () => {},
  defaultCategoryIds: [],
  multipleSelection: false,
  onChangeCategory: () => {},
  enablePanDownToClose: false,
  defaultSearchType: "product",
  snapPoints: DEFAULT_SNAP_POINTS["MEET_PEOPLE"],
};

export const useCategoriesSheet = (config: UseSheetConfig) => {
  const {t} = useLang();
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {main} = useAppSelector(selectBottomSheetState);
  const {categories, APIStatus} = useAppSelector(selectCategoryState);
  config = {...DEFAULT_SHEET_CONFIG, ...config};

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const {
    title,
    autoOpen,
    onChangeType,
    listeners = [],
    onChangeCategory,
    defaultSearchType,
    multipleSelection,
    defaultCategoryIds,
  } = config;

  useEffectWhenIsFocused(() => {
    if (!isOpen && !autoOpen) return;
    dispatch(
      openSheet({
        ...config,
        view: (
          <Column gap={15}>
            {title && <Guideline fontSize={15}>{title}</Guideline>}
            <Row fullWidth>
              {searchTypesOptions.map(
                ({label, image, searchType: type}, key) => (
                  <BoxButton
                    key={key}
                    size={65}
                    image={image}
                    imageSize={25}
                    label={t(label)}
                    labelStyle={{fontSize: 11}}
                    isSelected={type === defaultSearchType}
                    onPress={() => {
                      onChangeType(type);
                    }}
                  />
                )
              )}
            </Row>
            <ComponentManager
              data={categories["data"]}
              isError={APIStatus["categories"]["error"]}
              isLoading={APIStatus["categories"]["isLoading"]}
              error={{tryAgain: () => dispatch(getCategories())}}
              skeleton={{
                howMany: 7,
                placeholder: <Skeleton.ListItem width={WIDTH_SCREEN - 20} />,
              }}
              emptyUI={{
                helperText: t("try_another_time"),
                title: t("there_are_no_categories"),
              }}
            >
              <List
                autoTranslate
                contentInset={{bottom: 320}}
                defaultValue={defaultCategoryIds}
                multipleSelection={multipleSelection}
                data={getCategoriesByType(
                  categories["data"],
                  defaultSearchType ?? "product"
                )}
                onSelect={(ids) => {
                  onChangeCategory(ids);
                }}
              />
            </ComponentManager>
          </Column>
        ),
      })
    );
  }, [defaultCategoryIds, defaultSearchType, isOpen, ...listeners]);

  useEffectOnlyOnceWhenUserIsReady(() => {
    dispatch(getCategories());
  }, []);

  useEffect(() => {
    if (typeof main["view"] === "undefined") setIsOpen(false);
  }, [main]);

  return {categories, open};
};
