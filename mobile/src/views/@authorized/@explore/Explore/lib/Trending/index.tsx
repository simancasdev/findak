import {BarChart} from "src/svg";
import {TValue} from "src/languages";
import {getBarProgress} from "src/utils";
import {ViewParam} from "src/interfaces";
import {Skeleton} from "src/components/@skeletons";
import {useNavigation} from "@react-navigation/native";
import {ComponentManager} from "src/components/@system";
import {ProgressBarManager} from "src/components/@trending";
import {getExplore, selectTrendingState} from "src/redux/slices";
import {useLang, useAppSelector, useAppDispatch, useTheme} from "src/hooks";

interface TrendingProps {}

export const Trending: React.FC<TrendingProps> = () => {
  const {t} = useLang();
  const {colors} = useTheme();
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation<ViewParam<"CategoryTrending">>();
  const {statistics, trending, APIStatus} = useAppSelector(selectTrendingState);
  const {isLoading, error} = APIStatus["trending"];

  return (
    <ComponentManager
      isError={error}
      data={statistics}
      isLoading={isLoading}
      preventLoadingStateOnRefresh={false}
      error={{tryAgain: () => dispatch(getExplore())}}
      skeleton={{
        placeholder: <Skeleton.TrendingManager style={{marginTop: 15}} />,
      }}
      emptyUI={{
        helperText: t("no_trends_for_today"),
        icon: <BarChart size={40} color={colors["WHITE_BLACK"]} />,
      }}
    >
      <ProgressBarManager
        maxBarsNumber={4}
        headText={t("trending_searches")}
        style={{paddingHorizontal: 20, marginVertical: 20}}
        onItemPress={(item) =>
          navigate("CategoryTrending", {categoryId: item["id"]})
        }
        data={statistics.map((statistic) => {
          const {id, name} = statistic["category"];
          return {
            id,
            name: t(name as TValue),
            progress: getBarProgress(
              statistic["searches"],
              trending["data"]["length"]
            ),
          };
        })}
      />
    </ComponentManager>
  );
};
