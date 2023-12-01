import {NavigatorView} from "src/hoc";
import {useLayoutEffect} from "react";
import {ViewNavigationProps} from "src/interfaces";
import {Skeleton} from "src/components/@skeletons";
import {ChevronLeft, Inbox, Talking} from "src/svg";
import {useNavigation} from "@react-navigation/native";
import {getSearch, selectSearchState} from "src/redux/slices";
import {useLang, useTheme, useAppSelector, useAppDispatch} from "src/hooks";
import {Screen, TopBar, ComponentManager, Tabs} from "src/components/@system";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {
  User,
  Comments,
  SearchAction,
  SearchContent,
  OffersReceived,
} from "src/components/@searches";

interface SearchProps extends ViewNavigationProps<"Search"> {}

export const Search: React.FC<SearchProps> = ({route}) => {
  const {t} = useLang();
  const {colors} = useTheme();
  const {searchId} = route.params;
  const {goBack} = useNavigation();
  const dispatch = useAppDispatch();
  const {search, APIStatus} = useAppSelector(selectSearchState);
  const {isLoading, error} = APIStatus["search"];
  const {user} = search;

  useLayoutEffect(() => {
    dispatch(getSearch(searchId));
  }, [searchId]);

  return (
    <NavigatorView viewName="Search">
      <Screen
        style={{paddingHorizontal: 15}}
        refreshControl={{
          refreshing: isLoading,
          onRefresh: () => dispatch(getSearch(searchId)),
        }}
      >
        <TopBar
          back={{
            onPress: goBack,
            label: isLoading
              ? t("loading")
              : `${t("search_of")} ${user["first_name"]}`,
            icon: <ChevronLeft color={colors["WHITE_BLACK"]} />,
          }}
        />
        <ComponentManager
          data={search}
          isError={error}
          isLoading={isLoading}
          preventLoadingStateOnRefresh={false}
          skeleton={{placeholder: <Skeleton.SearchScreen />}}
          error={{tryAgain: () => dispatch(getSearch(searchId))}}
        >
          <Tabs
            tabs={[
              {
                icon: Talking,
                title: t("search_details"),
                view: (
                  <KeyboardAwareScrollView>
                    <User />
                    <SearchContent />
                    <SearchAction />
                    <Comments />
                  </KeyboardAwareScrollView>
                ),
              },
              {
                icon: Inbox,
                title: t("offers_received"),
                view: <OffersReceived />,
              },
            ]}
          />
        </ComponentManager>
      </Screen>
    </NavigatorView>
  );
};
