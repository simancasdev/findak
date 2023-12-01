import {Talking} from "src/svg";
import {View} from "react-native";
import {NavigatorView} from "src/hoc";
import {Cover, Resume} from "src/components/@users";
import {FeedbackList} from "src/components/@feedback";
import {syncUser, selectAuthState} from "src/redux/slices";
import {Tabs, Screen, Divider} from "src/components/@system";
import {useLang, useAppDispatch, useAppSelector} from "src/hooks";
import {Account, MyInventory, Preferences} from "src/components/@profile";

interface ProfileProps {}

export const Profile: React.FC<ProfileProps> = () => {
  const {t} = useLang();
  const dispatch = useAppDispatch();
  const {user} = useAppSelector(selectAuthState);

  return (
    <NavigatorView viewName="Profile">
      <Screen
        refreshControl={{
          refreshing: false,
          onRefresh: () => dispatch(syncUser()),
        }}
      >
        <Cover editable defaultCoverUrl={user["cover_url"]} />
        <Resume
          user={user}
          contentStyle={{marginBottom: -80}}
          style={{transform: [{translateY: -15}]}}
        />
        <View style={{paddingHorizontal: 10}}>
          <MyInventory />
          <Preferences />
          <Account />
          <Divider marginBottom={15} />
          <Tabs
            tabs={[
              {
                title: t("feedback_received"),
                icon: Talking,
                view: (
                  <FeedbackList
                    feedbacks={user["feedbacks"]}
                    emptyMessage={{
                      title: t("you_have_not_received_any_feedback"),
                      helperText: t("its_time_to_sell"),
                    }}
                  />
                ),
              },
            ]}
          />
        </View>
      </Screen>
    </NavigatorView>
  );
};
