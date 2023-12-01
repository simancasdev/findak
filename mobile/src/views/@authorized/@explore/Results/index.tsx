import {PALETTE} from "src/styles";
import {ViewParam} from "src/interfaces";
import {ChevronLeft, FilterList} from "src/svg";
import {Search} from "src/components/@searches";
import {Skeleton} from "src/components/@skeletons";
import {WIDTH_SCREEN, showSeparator} from "src/utils";
import {useNavigation} from "@react-navigation/native";
import {ComponentSeparator, NavigatorView} from "src/hoc";
import {useLang, useTheme, useAppDispatch, useAppSelector} from "src/hooks";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {
  getSearches,
  openSideMenu,
  selectSearchState,
  onChangeSearchFilter,
} from "src/redux/slices";
import {
  Row,
  Button,
  Column,
  Screen,
  IconBox,
  SearchBar,
  ComponentManager,
} from "src/components/@system";

interface ResultsProps {}

export const Results: React.FC<ResultsProps> = () => {
  const {t} = useLang();
  const {colors} = useTheme();
  const dispatch = useAppDispatch();
  const {navigate, goBack} = useNavigation<ViewParam<"Search">>();
  const {APIStatus, searches, filtersApplied} =
    useAppSelector(selectSearchState);
  const {isLoading, error} = APIStatus["searches"];
  const {query} = filtersApplied;

  return (
    <NavigatorView viewName="Result">
      <Screen>
        <Column style={{padding: 10}}>
          <Row justifyContent="space-between" fullWidth>
            <IconBox
              size={40}
              onPress={goBack}
              icon={<ChevronLeft color={colors["WHITE_BLACK"]} />}
              style={{
                borderRadius: 100,
                backgroundColor: PALETTE["TRANSPARENT"],
              }}
            />
            <SearchBar
              defaultValue={query}
              containerStyle={{width: WIDTH_SCREEN / 1.4}}
              onSearch={(text) => {
                dispatch(onChangeSearchFilter({query: text}));
                dispatch(getSearches());
              }}
            />
            <IconBox
              size={40}
              icon={<FilterList color={colors["WHITE_BLACK"]} />}
              onPress={() => {
                dispatch(openSideMenu({view: "search-filter"}));
              }}
            />
          </Row>
        </Column>
        <ComponentManager
          isError={error}
          isLoading={isLoading}
          data={searches["data"]}
          preventLoadingStateOnRefresh={false}
          error={{tryAgain: () => dispatch(getSearches())}}
          skeleton={{placeholder: <Skeleton.Search />, howMany: 5}}
          emptyUI={{
            title: t("we_have_nothing_to_show"),
            helperText: t("you_can_try_another_category_or_city"),
            icon: require("src/images/png/nothing-found.png"),
            body: (
              <Button
                variant="text_only"
                label={t("change")}
                onPress={() => dispatch(openSideMenu({view: "search-filter"}))}
              />
            ),
          }}
        >
          <KeyboardAwareScrollView>
            {searches["data"].map((search, key) => (
              <ComponentSeparator
                key={key}
                show={showSeparator(key, searches["data"])}
                children={
                  <Search
                    search={search}
                    onPress={(searchId) => navigate("Search", {searchId})}
                  />
                }
              />
            ))}
          </KeyboardAwareScrollView>
        </ComponentManager>
      </Screen>
    </NavigatorView>
  );
};
