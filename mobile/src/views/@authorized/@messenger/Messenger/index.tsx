import {Fragment} from "react";
import {NavigatorView} from "src/hoc";
import {ViewParam} from "src/interfaces";
import {Skeleton} from "src/components/@skeletons";
import {Conversation} from "src/components/@messenger";
import {useNavigation} from "@react-navigation/native";
import {getMyConversations, selectMessengerState} from "src/redux/slices";
import {ChevronLeft, Forum, Inventory, MessageCircle, Trades} from "src/svg";
import {
  Tabs,
  Empty,
  Button,
  Screen,
  TopBar,
  ComponentManager,
} from "src/components/@system";
import {
  useLang,
  useTheme,
  useAppDispatch,
  useAppSelector,
  useEffectWhenIsFocused,
} from "src/hooks";

interface MessengerProps {}

export const Messenger: React.FC<MessengerProps> = () => {
  const {t} = useLang();
  const {colors} = useTheme();
  const dispatch = useAppDispatch();
  const {goBack, navigate} = useNavigation<ViewParam<"Explore">>();
  const {conversations, APIStatus} = useAppSelector(selectMessengerState);
  const {isLoading, error} = APIStatus["conversations"];
  const {tradeType, regularType, productType} = conversations;
  const all = [...tradeType, ...regularType, ...productType];

  useEffectWhenIsFocused(() => {
    dispatch(getMyConversations());
  }, []);

  return (
    <NavigatorView viewName="Messenger">
      <Screen
        refreshControl={{
          refreshing: isLoading,
          onRefresh: () => dispatch(getMyConversations()),
        }}
      >
        <TopBar
          style={{paddingHorizontal: 15}}
          back={{
            label: t("chats"),
            onPress: () => goBack(),
            icon: <ChevronLeft color={colors["WHITE_BLACK"]} />,
          }}
        />
        <ComponentManager
          data={all}
          isError={error}
          isLoading={isLoading}
          error={{tryAgain: () => dispatch(getMyConversations())}}
          skeleton={{placeholder: <Skeleton.Conversation />, howMany: 5}}
          emptyUI={{
            icon: require("src/images/png/empty-folder.png"),
            title: t("you_havent_started_any_conversation"),
            body: (
              <Button
                variant="text_only"
                label={t("explore_and_meet_people")}
                onPress={() => navigate("Explore")}
              />
            ),
          }}
        >
          <Tabs
            rowTabStyle={{paddingHorizontal: 15}}
            tabs={[
              {
                title: t("social"),
                icon: MessageCircle,
                view: (
                  <Fragment>
                    {!regularType.length ? (
                      <Empty
                        emptyUI={{
                          title: t("theres_nothing_to_show"),
                          icon: <Forum color={colors["WHITE_BLACK"]} />,
                        }}
                      />
                    ) : (
                      regularType.map((conversation, key) => (
                        <Conversation conversation={conversation} key={key} />
                      ))
                    )}
                  </Fragment>
                ),
              },
              {
                title: t("deals"),
                icon: Trades,
                view: (
                  <Fragment>
                    {!tradeType.length ? (
                      <Empty
                        emptyUI={{
                          title: t("theres_nothing_to_show"),
                          icon: <Forum color={colors["WHITE_BLACK"]} />,
                        }}
                      />
                    ) : (
                      tradeType.map((conversation, key) => (
                        <Conversation conversation={conversation} key={key} />
                      ))
                    )}
                  </Fragment>
                ),
              },
              {
                title: t("products"),
                icon: Inventory,
                view: (
                  <Fragment>
                    {!productType.length ? (
                      <Empty
                        emptyUI={{
                          title: t("theres_nothing_to_show"),
                          icon: <Forum color={colors["WHITE_BLACK"]} />,
                        }}
                      />
                    ) : (
                      productType.map((conversation, key) => (
                        <Conversation conversation={conversation} key={key} />
                      ))
                    )}
                  </Fragment>
                ),
              },
            ]}
          />
        </ComponentManager>
      </Screen>
    </NavigatorView>
  );
};
