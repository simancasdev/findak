import {STYLES} from "./styles";
import {NavigatorView} from "src/hoc";
import {CheckCircle, Pending, X} from "src/svg";
import {Skeleton} from "src/components/@skeletons";
import {Completed, InProgress, Rejected} from "./tabs";
import {getTrades, selectTradeState} from "src/redux/slices";
import {Tabs, Screen, ComponentManager} from "src/components/@system";
import {
  useLang,
  useAppDispatch,
  useAppSelector,
  useEffectOnlyOnceWhenUserIsReady,
} from "src/hooks";

interface TradesProps {}

export const Trades: React.FC<TradesProps> = () => {
  const {t} = useLang();
  const dispatch = useAppDispatch();
  const {trades, APIStatus} = useAppSelector(selectTradeState);
  const {isLoading, error} = APIStatus["trades"];
  const {inProgress, completed, rejected} = trades;

  useEffectOnlyOnceWhenUserIsReady(() => {
    dispatch(getTrades());
  }, []);

  return (
    <NavigatorView viewName="Trades">
      <Screen
        title={t("trades")}
        contentStyle={STYLES["screen"]}
        refreshControl={{
          refreshing: isLoading,
          onRefresh: () => dispatch(getTrades()),
        }}
      >
        <ComponentManager
          isError={error}
          isLoading={isLoading}
          skeleton={{placeholder: <Skeleton.TradesScreen />}}
          error={{tryAgain: () => dispatch(getTrades())}}
          data={[...inProgress, ...completed, ...rejected]}
          emptyUI={{
            helperText: t("send_offers_or_create_searches"),
            title: t("you_have_not_started_any_transactions"),
            icon: require("src/images/png/empty-folder.png"),
          }}
        >
          <Tabs
            gap={10}
            tabs={[
              {
                title: t("in_progress"),
                icon: Pending,
                view: <InProgress />,
              },
              {
                title: t("finished"),
                icon: CheckCircle,
                view: <Completed />,
              },
              {
                title: t("canceled"),
                icon: X,
                view: <Rejected />,
              },
            ]}
          />
        </ComponentManager>
      </Screen>
    </NavigatorView>
  );
};
