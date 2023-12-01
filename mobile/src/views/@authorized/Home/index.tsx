import {Alerts, Header} from "./lib";
import {NavigatorView} from "src/hoc";
import {Screen} from "src/components/@system";
import {getMyAlerts, selectSearchState} from "src/redux/slices";
import {
  useAppDispatch,
  useAppSelector,
  useEffectOnlyOnceWhenUserIsReady,
} from "src/hooks";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  const dispatch = useAppDispatch();
  const {APIStatus} = useAppSelector(selectSearchState);
  const {isLoading} = APIStatus["alerts"];

  useEffectOnlyOnceWhenUserIsReady(() => {
    dispatch(getMyAlerts());
  }, []);

  return (
    <NavigatorView viewName="Home">
      <Screen
        refreshControl={{
          refreshing: isLoading,
          onRefresh: () => dispatch(getMyAlerts()),
        }}
      >
        <Header />
        <Alerts />
      </Screen>
    </NavigatorView>
  );
};
