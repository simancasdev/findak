import {ChevronLeft} from "src/svg";
import {NavigatorView} from "src/hoc";
import {preventCleanViews} from "./helper";
import {Skeleton} from "src/components/@skeletons";
import {useNavigation} from "@react-navigation/native";
import {ViewNavigationProps, ViewParam} from "src/interfaces";
import {ComponentManager, Screen, TopBar} from "src/components/@system";
import {
  getTrade,
  onCleanTrade,
  selectTradeState,
  selectNavigatorState,
} from "src/redux/slices";
import {
  useLang,
  useTheme,
  useAppDispatch,
  useAppSelector,
  useEffectWhenIsFocused,
} from "src/hooks";
import {
  Users,
  About,
  History,
  Actions,
  ChatShortcut,
  SearchAndOffer,
} from "src/components/@trades";

interface TradeProps extends ViewNavigationProps<"Trade"> {}

export const Trade: React.FC<TradeProps> = ({route}) => {
  const {t} = useLang();
  const {colors} = useTheme();
  const {tradeId} = route["params"];
  const dispatch = useAppDispatch();
  const {goBack} = useNavigation<ViewParam<"Search">>();
  const {currentView} = useAppSelector(selectNavigatorState);
  const {APIStatus, trade} = useAppSelector(selectTradeState);
  const {isLoading, error} = APIStatus["trade"];

  useEffectWhenIsFocused(() => {
    dispatch(getTrade(tradeId));
  }, [tradeId]);

  return (
    <NavigatorView viewName="Trade">
      <Screen
        contentInset={{bottom: 10}}
        style={{paddingHorizontal: 15}}
        onScreenUnMount={() => {
          // if user go to chat or UserProfile view from here
          // then we don't clean the trade state to avoid loading state
          if (preventCleanViews.includes(currentView)) return;
          dispatch(onCleanTrade());
        }}
        refreshControl={{
          refreshing: isLoading,
          onRefresh: () => dispatch(getTrade(tradeId)),
        }}
      >
        <TopBar
          back={{
            label: t("deal"),
            onPress: goBack,
            icon: <ChevronLeft color={colors["WHITE_BLACK"]} />,
          }}
        />
        <ComponentManager
          data={trade}
          isError={error}
          isLoading={isLoading}
          skeleton={{placeholder: <Skeleton.TradeScreen />}}
          error={{tryAgain: () => dispatch(getTrade(tradeId))}}
        >
          <Users />
          <ChatShortcut />
          <About />
          <Actions />
          <History />
          <SearchAndOffer />
        </ComponentManager>
      </Screen>
    </NavigatorView>
  );
};
