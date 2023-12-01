import {useLayoutEffect} from "react";
import {SearchType} from "src/interfaces";
import {getCategoriesByType} from "src/utils";
import {sanitizeCategories} from "../../helper";
import {Skeleton} from "src/components/@skeletons";
import {ComponentManager, List} from "src/components/@system";
import {useAppDispatch, useAppSelector, useLang} from "src/hooks";
import {
  getCategories,
  selectAuthState,
  selectSearchState,
  selectCategoryState,
  onChangeSearchFilter,
} from "src/redux/slices";

interface CategoriesProps {}

export const Categories: React.FC<CategoriesProps> = () => {
  const {t} = useLang();
  const dispatch = useAppDispatch();
  const {user} = useAppSelector(selectAuthState);
  const {buildingFilters} = useAppSelector(selectSearchState);
  const {categories, APIStatus} = useAppSelector(selectCategoryState);
  const {searchType, categories: categoryIds} = buildingFilters;

  useLayoutEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <ComponentManager
      data={categories["data"]}
      isError={APIStatus["categories"]["error"]}
      isLoading={APIStatus["categories"]["isLoading"]}
      error={{tryAgain: () => dispatch(getCategories())}}
      skeleton={{placeholder: <Skeleton.ListItem />, howMany: 7}}
      emptyUI={{
        helperText: t("try_another_time"),
        title: t("there_are_no_categories"),
      }}
    >
      <List
        autoTranslate
        multipleSelection
        defaultValue={categoryIds}
        data={
          // prettier-ignore
          !searchType.length
          ? sanitizeCategories(categories["data"], user)
          : sanitizeCategories(getCategoriesByType(categories["data"], searchType as SearchType), user)
        }
        onSelect={(ids) => {
          dispatch(
            onChangeSearchFilter({
              categories: ids as unknown as string[],
            })
          );
        }}
      />
    </ComponentManager>
  );
};
