import {TValue} from "src/languages";
import {ViewParam} from "src/interfaces";
import {getBarProgress} from "src/utils";
import {useAppSelector, useLang} from "src/hooks";
import {selectTrendingState} from "src/redux/slices";
import {useNavigation} from "@react-navigation/native";
import {ProgressBarManager} from "src/components/@trending";

interface StatisticsProps {}

export const Statistics: React.FC<StatisticsProps> = () => {
  const {t} = useLang();
  const {navigate} = useNavigation<ViewParam<"CategoryTrending">>();
  const {statistics, trending} = useAppSelector(selectTrendingState);

  return (
    <ProgressBarManager
      style={{paddingHorizontal: 15}}
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
  );
};
