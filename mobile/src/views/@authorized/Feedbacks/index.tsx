import {ChevronLeft} from "src/svg";
import {NavigatorView} from "src/hoc";
import {ViewNavigationProps} from "src/interfaces";
import {Skeleton} from "src/components/@skeletons";
import {FeedbackList} from "src/components/@feedback";
import {useNavigation} from "@react-navigation/native";
import {selectFeedbackState, getFeedbacks} from "src/redux/slices";
import {Screen, ComponentManager, TopBar} from "src/components/@system";
import {useLang, useTheme, useAppDispatch, useAppSelector} from "src/hooks";

interface FeedbacksProps extends ViewNavigationProps<"Feedbacks"> {}

export const Feedbacks: React.FC<FeedbacksProps> = ({route}) => {
  const {t} = useLang();
  const {colors} = useTheme();
  const {userId, title} = route.params;
  const {goBack} = useNavigation();
  const dispatch = useAppDispatch();
  const {APIStatus, feedbacks} = useAppSelector(selectFeedbackState);
  const {isLoading, error} = APIStatus["feedbacks"];

  return (
    <NavigatorView viewName="Feedbacks">
      <Screen
        onScreenMounted={() => dispatch(getFeedbacks(userId))}
        refreshControl={{
          refreshing: isLoading,
          onRefresh: () => dispatch(getFeedbacks(userId)),
        }}
      >
        <TopBar
          style={{paddingHorizontal: 15}}
          back={{
            icon: <ChevronLeft color={colors["WHITE_BLACK"]} />,
            label: title ?? t("feedbacks"),
            onPress: () => {
              goBack();
            },
          }}
        />

        <ComponentManager
          isError={error}
          isLoading={isLoading}
          data={feedbacks}
          error={{tryAgain: () => dispatch(getFeedbacks(userId))}}
          skeleton={{
            howMany: 5,
            placeholder: <Skeleton.Feedback style={{marginLeft: 15}} />,
          }}
          emptyUI={{
            icon: require("src/images/png/star-half-empty.png"),
            title: t("you_have_not_received_any_feedback"),
            helperText: t("its_time_to_sell"),
          }}
        >
          <FeedbackList feedbacks={feedbacks} />
        </ComponentManager>
      </Screen>
    </NavigatorView>
  );
};
