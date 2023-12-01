import {useEffect} from "react";
import {NavigatorView} from "src/hoc";
import {PALETTE, styleOS} from "src/styles";
import {useNavigation} from "@react-navigation/native";
import {ViewNavigationProps, ViewParam} from "src/interfaces";
import {selectAuthState, shootConfetti} from "src/redux/slices";
import {Bell, ChevronLeft, Crown, MessageCircle, Search, Sent} from "src/svg";
import {
  useLang,
  useTheme,
  useMoment,
  useAppDispatch,
  useAppSelector,
} from "src/hooks";
import {
  Row,
  Avatar,
  Button,
  Column,
  Screen,
  TopBar,
  BoxItems,
  Typography,
} from "src/components/@system";

interface CongratulationsProps extends ViewNavigationProps<"Congratulations"> {}

export const Congratulations: React.FC<CongratulationsProps> = () => {
  const {t} = useLang();
  const {colors} = useTheme();
  const dispatch = useAppDispatch();
  const {moment, dateFormat} = useMoment();
  const {navigate} = useNavigation<ViewParam<"Home">>();
  const {first_name, last_name, avatar_url} =
    useAppSelector(selectAuthState)["user"];

  useEffect(() => {
    dispatch(shootConfetti(true));
  }, []);

  return (
    <NavigatorView viewName="Congratulations">
      <Screen contentInset={{bottom: 10}} style={{paddingHorizontal: 15}}>
        <TopBar
          back={{
            label: t("congratulations"),
            onPress: () => navigate("Home"),
            icon: <ChevronLeft color={colors["WHITE_BLACK"]} />,
          }}
        />
        <Column alignItems="center">
          <Avatar size={80} src={avatar_url} name={first_name} />
          <Row>
            <Crown size={30} />
            <Typography fontSize={18} fontWeight={styleOS("600")}>
              {first_name} {last_name}
            </Typography>
          </Row>
          <Typography>
            {t("subscription_date")} {moment().format(dateFormat)}
          </Typography>
        </Column>
        <BoxItems
          items={[
            {
              label: t("send_unlimited_offers"),
              icon: (
                <Sent strokeWidth={2} size={18} color={colors["WHITE_BLACK"]} />
              ),
            },
            {
              label: t("send_unlimited_searches"),
              icon: <Search size={18} color={colors["WHITE_BLACK"]} />,
            },
            {
              label: t(
                "find_out_first_than_others_when_a_search_of_your_preference"
              ),
              icon: <Bell size={18} color={colors["WHITE_BLACK"]} />,
            },
            {
              border: false,
              label: t("your_use_of_chat_with_users_will_be_enabled"),
              icon: <MessageCircle size={18} color={colors["WHITE_BLACK"]} />,
            },
          ]}
        />
        <Button
          label={t("accept")}
          labelColor={PALETTE["WHITE"]}
          onPress={() => navigate("Home")}
        />
      </Screen>
    </NavigatorView>
  );
};
