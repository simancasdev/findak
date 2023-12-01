import {NavigatorView} from "src/hoc";
import {ViewParam} from "src/interfaces";
import {CheckCircle, Pending, X} from "src/svg";
import {Skeleton} from "src/components/@skeletons";
import {Accepted, Declined, Waiting} from "./tabs";
import {useNavigation} from "@react-navigation/native";
import {getSentOffers, selectOfferState} from "src/redux/slices";
import {Tabs, Screen, Button, ComponentManager} from "src/components/@system";
import {
  useLang,
  useAppDispatch,
  useAppSelector,
  useEffectOnlyOnceWhenUserIsReady,
} from "src/hooks";

interface SentProps {}

export const Sent: React.FC<SentProps> = () => {
  const {t} = useLang();
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation<ViewParam<"Explore">>();
  const {APIStatus, sent} = useAppSelector(selectOfferState);
  const {isLoading, error} = APIStatus["sent"];
  const {waiting, declined, accepted} = sent;

  useEffectOnlyOnceWhenUserIsReady(() => {
    dispatch(getSentOffers());
  }, []);

  return (
    <NavigatorView viewName="Sent">
      <Screen
        title={t("sent_title")}
        contentStyle={{paddingHorizontal: 10, paddingTop: 10}}
        refreshControl={{
          refreshing: isLoading,
          onRefresh: () => dispatch(getSentOffers()),
        }}
      >
        <ComponentManager
          isError={error}
          isLoading={isLoading}
          data={[...waiting, ...declined, ...accepted]}
          skeleton={{placeholder: <Skeleton.SentScreen />}}
          error={{tryAgain: () => dispatch(getSentOffers())}}
          emptyUI={{
            title: t("you_have_not_sent_offers_yet"),
            icon: require("src/images/png/empty-folder.png"),
            helperText: t("explore_searches_and_get_opportunities"),
            body: (
              <Button
                variant="text_only"
                label={t("go_to_explore")}
                onPress={() => navigate("Explore")}
              />
            ),
          }}
        >
          <Tabs
            tabs={[
              {
                icon: Pending,
                title: t("waiting_for_the_customer"),
                view: <Waiting />,
              },
              {
                icon: CheckCircle,
                title: t("accepted"),
                view: <Accepted />,
              },
              {
                icon: X,
                title: t("rejected"),
                view: <Declined />,
              },
            ]}
          />
        </ComponentManager>
      </Screen>
    </NavigatorView>
  );
};
