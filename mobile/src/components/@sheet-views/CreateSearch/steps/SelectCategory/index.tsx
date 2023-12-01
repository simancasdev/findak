import {useEffect} from "react";
import {ChevronLeft} from "src/svg";
import {useFormikContext} from "formik";
import {NewSearchPayload} from "src/interfaces";
import {Skeleton} from "src/components/@skeletons";
import {WIDTH_SCREEN, getCategoriesByType} from "src/utils";
import {CREATE_SEARCH_SNAP_POINTS} from "../../sheet-snap-points";
import {useLang, useTheme, useAppDispatch, useAppSelector} from "src/hooks";
import {Column, ComponentManager, List, TopBar} from "src/components/@system";
import {
  getCategories,
  setSnapPoints,
  selectCategoryState,
  onChangeCreateSearchStep,
} from "src/redux/slices";

interface SelectCategoryProps {}

export const SelectCategory: React.FC<SelectCategoryProps> = () => {
  const {t} = useLang();
  const {colors} = useTheme();
  const dispatch = useAppDispatch();
  const {categories, APIStatus} = useAppSelector(selectCategoryState);
  const {handleChange, values} = useFormikContext<NewSearchPayload>();
  const {isLoading, error} = APIStatus["categories"];

  useEffect(() => {
    dispatch(setSnapPoints(CREATE_SEARCH_SNAP_POINTS["select-category"]));
    if (!values["category_id"]) dispatch(getCategories());
  }, []);

  return (
    <Column gap={15}>
      <TopBar
        style={{width: "100%"}}
        back={{
          label: t("category"),
          icon: <ChevronLeft color={colors["WHITE_BLACK"]} />,
          helperText: t("so_we_know_who_to_notify"),
          onPress: () => {
            // prettier-ignore
            dispatch(setSnapPoints(CREATE_SEARCH_SNAP_POINTS["select-search-type"]));
            dispatch(onChangeCreateSearchStep("select-search-type"));
          },
        }}
        action={{
          disabled: !values["category_id"],
          label: t("next"),
          onPress: () => {
            dispatch(onChangeCreateSearchStep("describe"));
          },
        }}
      />
      <ComponentManager
        isError={error}
        isLoading={isLoading}
        data={categories["data"]}
        preventLoadingStateOnRefresh={false}
        emptyUI={{title: t("we_have_nothing_to_show")}}
        error={{tryAgain: () => dispatch(getCategories())}}
        skeleton={{
          placeholder: <Skeleton.ListItem width={WIDTH_SCREEN - 20} />,
          howMany: 5,
        }}
      >
        <List
          autoTranslate
          contentInset={{bottom: 280}}
          defaultValue={values["category_id"]}
          data={getCategoriesByType(categories["data"], values["type"])}
          onSelect={(id) => {
            handleChange({target: {name: "category_id", value: id}});
          }}
        />
      </ComponentManager>
    </Column>
  );
};
