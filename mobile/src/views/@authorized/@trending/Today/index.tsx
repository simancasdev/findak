import {BarChart} from "src/svg";
import {NavigatorView} from "src/hoc";
import {Skeleton} from "src/components/@skeletons";
import {Statistics, SearchesByCategory} from "./lib";
import {ComponentManager, Screen} from "src/components/@system";
import {getTrending, selectTrendingState} from "src/redux/slices";
import {
  useLang,
  useTheme,
  useAppDispatch,
  useAppSelector,
  useEffectOnlyOnceWhenUserIsReady,
} from "src/hooks";

interface TodayProps {}

export const Today: React.FC<TodayProps> = () => {
  const {t} = useLang();
  const dispatch = useAppDispatch();
  const {colors} = useTheme();
  const {statistics, APIStatus} = useAppSelector(selectTrendingState);
  const {isLoading, error} = APIStatus["trending"];

  useEffectOnlyOnceWhenUserIsReady(() => {
    dispatch(getTrending());
  }, []);

  return (
    <NavigatorView viewName="TodayTrending">
      <Screen
        title={t("today_trending_in_your_country")}
        refreshControl={{
          refreshing: isLoading,
          onRefresh: () => dispatch(getTrending()),
        }}
      >
        <ComponentManager
          isError={error}
          data={statistics}
          isLoading={isLoading}
          error={{tryAgain: () => dispatch(getTrending())}}
          skeleton={{
            placeholder: <Skeleton.TodayTrendingScreen />,
          }}
          emptyUI={{
            helperText: t("no_trends_for_today"),
            icon: <BarChart size={40} color={colors["WHITE_BLACK"]} />,
          }}
        >
          {/* <Header /> */}
          <Statistics />
          <SearchesByCategory />
        </ComponentManager>
      </Screen>
    </NavigatorView>
  );
};
