import {useEffect} from "react";
import {STYLES} from "./styles";
import {compareIds} from "src/utils";
import {NavigatorView} from "src/hoc";
import {Grid} from "src/components/@inventory";
import {Skeleton} from "src/components/@skeletons";
import {FeedbackList} from "src/components/@feedback";
import {useNavigation} from "@react-navigation/native";
import {ViewNavigationProps, ViewParam} from "src/interfaces";
import {Cover, Information, Resume} from "src/components/@users";
import {ChevronLeft, Grid as GridIcon, Talking, User} from "src/svg";
import {useLang, useTheme, useAppDispatch, useAppSelector} from "src/hooks";
import {Tabs, Screen, TopBar, ComponentManager} from "src/components/@system";
import {
  resetProfile,
  getUserProfile,
  selectAuthState,
  selectUserState,
} from "src/redux/slices";

interface UserProfileProps extends ViewNavigationProps<"UserProfile"> {}

export const UserProfile: React.FC<UserProfileProps> = ({route}) => {
  const {t} = useLang();
  const {colors} = useTheme();
  const dispatch = useAppDispatch();
  const {authUserId} = useAppSelector(selectAuthState);
  const {userId, enableMessengerButton = true} = route.params;
  const {user, APIStatus} = useAppSelector(selectUserState);
  const {isLoading, error} = APIStatus["user"];
  const {goBack, navigate} = useNavigation<ViewParam<"ProductDetails">>();

  useEffect(() => {
    dispatch(getUserProfile(userId));
    return () => {
      dispatch(resetProfile());
    };
  }, [userId]);

  return (
    <NavigatorView viewName="UserProfile">
      <Screen
        refreshControl={{
          refreshing: isLoading,
          onRefresh: () => dispatch(getUserProfile(userId)),
        }}
      >
        <TopBar
          style={{paddingHorizontal: 10}}
          back={{
            onPress: goBack,
            icon: <ChevronLeft color={colors["WHITE_BLACK"]} />,
            label: isLoading
              ? t("loading")
              : t(
                  compareIds([authUserId, userId])
                    ? "this_is_your_public_profile"
                    : "profile"
                ),
          }}
        />
        <Cover defaultCoverUrl={user["cover_url"]} />

        <ComponentManager
          data={user}
          isError={error}
          isLoading={isLoading}
          preventLoadingStateOnRefresh={false}
          skeleton={{placeholder: <Skeleton.ProfileScreen />}}
          error={{tryAgain: () => dispatch(getUserProfile(userId))}}
        >
          <Resume
            user={user}
            style={STYLES["user"]}
            contentStyle={{marginBottom: -50}}
            enableMessengerButton={enableMessengerButton}
          />
          <Tabs
            style={{marginTop: 10, paddingHorizontal: 10}}
            tabs={[
              {
                icon: GridIcon,
                title: t("products"),
                view: (
                  <Grid
                    products={user["products"]}
                    onItemPress={(productId) =>
                      navigate("ProductDetails", {productId})
                    }
                  />
                ),
              },
              {
                icon: Talking,
                title: t("feedbacks"),
                view: (
                  <FeedbackList
                    feedbacks={user["feedbacks"]}
                    emptyMessage={{
                      title: `${user["first_name"]} ${t(
                        "has_not_received_any_feedback"
                      )}`,
                    }}
                  />
                ),
              },
              {
                icon: User,
                title: t("user_information"),
                view: <Information user={user} />,
              },
            ]}
          />
        </ComponentManager>
      </Screen>
    </NavigatorView>
  );
};
