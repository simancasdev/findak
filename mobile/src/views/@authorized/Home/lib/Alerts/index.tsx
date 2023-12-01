import {ViewParam} from "src/interfaces";
import {Skeleton} from "src/components/@skeletons";
import {SearchAlert} from "src/components/@searches";
import {useNavigation} from "@react-navigation/native";
import {Button, ComponentManager} from "src/components/@system";
import {getMyAlerts, selectSearchState} from "src/redux/slices";
import {useAppDispatch, useAppSelector, useLang} from "src/hooks";

interface AlertsProps {}

export const Alerts: React.FC<AlertsProps> = () => {
  const {t} = useLang();
  const dispatch = useAppDispatch();
  const {APIStatus, alerts} = useAppSelector(selectSearchState);
  const {navigate} = useNavigation<ViewParam<"Profile" | "Search">>();
  const {isLoading, error} = APIStatus["alerts"];

  return (
    <ComponentManager
      isError={error}
      isLoading={isLoading}
      data={alerts["data"]}
      error={{tryAgain: () => dispatch(getMyAlerts())}}
      skeleton={{placeholder: <Skeleton.SearchAlert />, howMany: 5}}
      emptyUI={{
        icon: require("src/images/png/empty-folder.png"),
        title: t("we_have_nothing_to_show"),
        helperText: t("you_can_change_your_preferences_in_your_profile"),
        body: (
          <Button
            variant="text_only"
            label={t("go_to_profile")}
            onPress={() => navigate("Profile")}
          />
        ),
      }}
    >
      {alerts["data"].map((search, key) => (
        <SearchAlert
          key={key}
          search={search}
          onPress={(searchId) => navigate("Search", {searchId})}
        />
      ))}
    </ComponentManager>
  );
};
