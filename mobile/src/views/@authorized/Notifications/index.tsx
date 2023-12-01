import {ChevronLeft} from "src/svg";
import {NavigatorView} from "src/hoc";
import {useViewActions} from "./useViewActions";
import {Skeleton} from "src/components/@skeletons";
import {useNavigation} from "@react-navigation/native";
import {Notification} from "src/components/Notification";
import {Screen, TopBar, ComponentManager} from "src/components/@system";
import {useLang, useTheme, useAppDispatch, useAppSelector} from "src/hooks";
import {getMyNotifications, selectNotificationState} from "src/redux/slices";

interface NotificationsProps {}

export const Notifications: React.FC<NotificationsProps> = () => {
  useViewActions();
  const {t} = useLang();
  const {colors} = useTheme();
  const {goBack} = useNavigation();
  const dispatch = useAppDispatch();
  const {notifications, APIStatus} = useAppSelector(selectNotificationState);
  const {isLoading, error} = APIStatus["notifications"];

  return (
    <NavigatorView viewName="Notifications">
      <Screen
        refreshControl={{
          refreshing: isLoading,
          onRefresh: () => dispatch(getMyNotifications()),
        }}
      >
        <TopBar
          style={{paddingHorizontal: 15}}
          back={{
            icon: <ChevronLeft color={colors["WHITE_BLACK"]} />,
            label: t("notifications"),
            onPress: () => {
              goBack();
            },
          }}
        />
        <ComponentManager
          isError={error}
          isLoading={isLoading}
          data={notifications["data"]}
          error={{tryAgain: () => dispatch(getMyNotifications())}}
          skeleton={{placeholder: <Skeleton.SearchAlert />, howMany: 5}}
          emptyUI={{
            title: t("we_have_nothing_to_show"),
            icon: require("src/images/png/empty-folder.png"),
          }}
        >
          {notifications["data"].map((notification, key) => (
            <Notification key={key} notification={notification} />
          ))}
        </ComponentManager>
      </Screen>
    </NavigatorView>
  );
};
