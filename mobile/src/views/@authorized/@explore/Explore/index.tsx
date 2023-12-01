import {NavigatorView} from "src/hoc";
import {All, Header, Trending} from "./lib";
import {Screen} from "src/components/@system";
import {getExplore, getTrending, selectSearchState} from "src/redux/slices";
import {
  useLang,
  useAppDispatch,
  useAppSelector,
  useEffectOnlyOnceWhenUserIsReady,
} from "src/hooks";

interface ExploreProps {}

export const Explore: React.FC<ExploreProps> = () => {
  const {t} = useLang();
  const dispatch = useAppDispatch();
  const {APIStatus} = useAppSelector(selectSearchState);
  const {isLoading} = APIStatus["explore"];

  useEffectOnlyOnceWhenUserIsReady(() => {
    dispatch(getExplore());
    dispatch(getTrending());
  }, []);

  return (
    <NavigatorView viewName="Explore">
      <Screen
        title={t("explore")}
        contentInset={{bottom: 100}}
        refreshControl={{
          refreshing: isLoading,
          onRefresh: () => dispatch(getExplore()),
        }}
      >
        <Header />
        <Trending />
        <All />
      </Screen>
    </NavigatorView>
  );
};
