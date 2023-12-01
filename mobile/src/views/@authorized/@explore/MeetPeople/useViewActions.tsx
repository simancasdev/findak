import {useCategoriesSheet, useLang} from "src/hooks";
import {useAppDispatch, useAppSelector} from "src/hooks";
import {
  getPeople,
  selectUserState,
  selectCategoryState,
  onChangePeopleFilter,
} from "src/redux/slices";

export const useViewActions = () => {
  const {t} = useLang();
  const dispatch = useAppDispatch();
  const {APIStatus} = useAppSelector(selectCategoryState);
  const {buildingFilters} = useAppSelector(selectUserState);
  const {searchType, categories: categoryIds} = buildingFilters;

  useCategoriesSheet({
    autoOpen: true,
    multipleSelection: true,
    defaultSearchType: searchType,
    defaultCategoryIds: categoryIds,
    title: t("filter_merchants_by_your_interest"),
    listeners: [APIStatus],
    onChangeType: (type) => {
      dispatch(onChangePeopleFilter({searchType: type}));
      dispatch(getPeople());
    },
    onChangeCategory: (ids) => {
      dispatch(onChangePeopleFilter({categories: ids as unknown as string[]}));
      dispatch(getPeople());
    },
  });
};
