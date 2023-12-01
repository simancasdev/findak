import {useState} from "react";
import {PALETTE} from "src/styles";
import {ChevronLeft} from "src/svg";
import {Keyboard} from "react-native";
import {searchesFiltered} from "./helper";
import {Search} from "src/components/@searches";
import {Skeleton} from "src/components/@skeletons";
import {WIDTH_SCREEN, showSeparator} from "src/utils";
import {useNavigation} from "@react-navigation/native";
import {ComponentSeparator, NavigatorView} from "src/hoc";
import {SearchModel, ViewNavigationProps, ViewParam} from "src/interfaces";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {
  getSearches,
  selectTrendingState,
  getTrendingByCategory,
} from "src/redux/slices";
import {
  useLang,
  useTheme,
  useAppDispatch,
  useAppSelector,
  useEffectWhenIsFocused,
} from "src/hooks";
import {
  Row,
  Column,
  Screen,
  IconBox,
  SearchBar,
  ComponentManager,
} from "src/components/@system";

interface CategoryTrendingProps
  extends ViewNavigationProps<"CategoryTrending"> {}

export const CategoryTrending: React.FC<CategoryTrendingProps> = ({route}) => {
  const {categoryId} = route["params"];
  const {t} = useLang();
  const {colors} = useTheme();
  const dispatch = useAppDispatch();
  const {navigate, goBack} = useNavigation<ViewParam<"Search">>();
  const {APIStatus, trendingByCategory} = useAppSelector(selectTrendingState);
  const {isLoading, error} = APIStatus["trendingByCategory"];
  const [query, setQuery] = useState<string>("");
  const searchesList: SearchModel[] = !query.length
    ? trendingByCategory["data"]
    : searchesFiltered(trendingByCategory["data"], query);

  useEffectWhenIsFocused(() => {
    dispatch(getTrendingByCategory(categoryId));
  }, [categoryId]);

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
              placeholder={t("search_in_trends")}
              onSearch={() => Keyboard.dismiss()}
              onChangeText={(text) => setQuery(text)}
              containerStyle={{width: WIDTH_SCREEN - 70}}
            />
          </Row>
        </Column>
        <ComponentManager
          isError={error}
          data={searchesList}
          isLoading={isLoading}
          preventLoadingStateOnRefresh={false}
          error={{tryAgain: () => dispatch(getSearches())}}
          skeleton={{placeholder: <Skeleton.Search />, howMany: 5}}
          emptyUI={{
            title: t("we_have_nothing_to_show"),
            icon: require("src/images/png/nothing-found.png"),
          }}
        >
          <KeyboardAwareScrollView>
            {searchesList.map((search, key) => (
              <ComponentSeparator
                key={key}
                show={showSeparator(key, searchesList)}
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
