import {NavigatorView} from "src/hoc";
import {CheckCircle, Pending, X} from "src/svg";
import {Accepted, Declined, Waiting} from "./tabs";
import {Skeleton} from "src/components/@skeletons";
import {CreateSearch} from "src/components/@sheet-views";
import {Tabs, Button, Screen, ComponentManager} from "src/components/@system";
import {openSheet, selectOfferState, getReceivedOffers} from "src/redux/slices";
import {CREATE_SEARCH_SNAP_POINTS} from "src/components/@sheet-views/CreateSearch/sheet-snap-points";
import {
  useLang,
  useAppSelector,
  useAppDispatch,
  useEffectOnlyOnceWhenUserIsReady,
} from "src/hooks";

interface InboxProps {}

export const Inbox: React.FC<InboxProps> = () => {
  const {t} = useLang();
  const dispatch = useAppDispatch();
  const {APIStatus, received} = useAppSelector(selectOfferState);
  const {isLoading, error} = APIStatus["received"];
  const {waiting, accepted, declined} = received;

  useEffectOnlyOnceWhenUserIsReady(() => {
    dispatch(getReceivedOffers());
  }, []);

  return (
    <NavigatorView viewName="Inbox">
      <Screen
        title={t("inbox_title")}
        contentStyle={{paddingHorizontal: 10, paddingTop: 10}}
        refreshControl={{
          refreshing: isLoading,
          onRefresh: () => dispatch(getReceivedOffers()),
        }}
      >
        <ComponentManager
          isError={error}
          isLoading={isLoading}
          data={[...waiting, ...accepted, ...declined]}
          skeleton={{placeholder: <Skeleton.InboxScreen />}}
          error={{tryAgain: () => dispatch(getReceivedOffers())}}
          emptyUI={{
            title: t("no_offer_records_yet"),
            helperText: t("do_a_search_to_start_receiving_them"),
            icon: require("src/images/png/empty-folder.png"),
            body: (
              <Button
                variant="text_only"
                label={t("create")}
                onPress={() =>
                  dispatch(
                    openSheet({
                      view: <CreateSearch />,
                      snapPoints:
                        CREATE_SEARCH_SNAP_POINTS["select-search-type"],
                    })
                  )
                }
              />
            ),
          }}
        >
          <Tabs
            tabs={[
              {
                icon: Pending,
                title: t("on_hold"),
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
