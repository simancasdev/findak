import {ChevronLeft} from "src/svg";
import {NavigatorView} from "src/hoc";
import {preventCleanViews} from "./helper";
import {Skeleton} from "src/components/@skeletons";
import {useNavigation} from "@react-navigation/native";
import {ViewNavigationProps, ViewParam} from "src/interfaces";
import {About, Actions, Overview, Users} from "src/components/@offers";
import {Screen, TopBar, ComponentManager} from "src/components/@system";
import {
  getOffer,
  onCleanOffer,
  selectOfferState,
  selectNavigatorState,
} from "src/redux/slices";
import {
  useLang,
  useTheme,
  useAppDispatch,
  useAppSelector,
  useEffectWhenIsFocused,
} from "src/hooks";

interface OfferProps extends ViewNavigationProps<"Offer"> {}

export const Offer: React.FC<OfferProps> = ({route}) => {
  const {t} = useLang();
  const {colors} = useTheme();
  const {offerId} = route["params"];
  const dispatch = useAppDispatch();
  const {goBack} = useNavigation<ViewParam<"Search">>();
  const {currentView} = useAppSelector(selectNavigatorState);
  const {APIStatus, offer} = useAppSelector(selectOfferState);
  const {isLoading, error} = APIStatus["offer"];

  useEffectWhenIsFocused(() => {
    dispatch(getOffer(offerId));
  }, [offerId]);

  return (
    <NavigatorView viewName="Offer">
      <Screen
        style={{paddingHorizontal: 15}}
        onScreenUnMount={() => {
          // if user go to UserProfile view from here
          // then we don't clean the trade state to avoid loading state
          if (preventCleanViews.includes(currentView)) return;
          dispatch(onCleanOffer());
        }}
        refreshControl={{
          refreshing: isLoading,
          onRefresh: () => dispatch(getOffer(offerId)),
        }}
      >
        <TopBar
          back={{
            onPress: goBack,
            label: t("offer"),
            icon: <ChevronLeft color={colors["WHITE_BLACK"]} />,
          }}
        />
        <ComponentManager
          data={offer}
          isError={error}
          isLoading={isLoading}
          skeleton={{placeholder: <Skeleton.OfferScreen />}}
          error={{tryAgain: () => dispatch(getOffer(offerId))}}
        >
          <Users />
          <About />
          <Actions />
          <Overview />
        </ComponentManager>
      </Screen>
    </NavigatorView>
  );
};
