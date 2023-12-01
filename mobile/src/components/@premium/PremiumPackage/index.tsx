import {STYLES} from "./styles";
import {View} from "react-native";
import {useLang} from "src/hooks";
import {PALETTE} from "src/styles";
import {useNavigation} from "@react-navigation/native";
import {Column, Row, TopBar, Typography} from "src/components/@system";
import {
  Sent,
  Bell,
  Wave,
  Crown,
  Search,
  ChevronLeft,
  MessageCircle,
} from "src/svg";

interface PremiumPackageProps {}

export const PremiumPackage: React.FC<PremiumPackageProps> = () => {
  const {t} = useLang();
  const {goBack} = useNavigation();

  return (
    <View>
      <View style={STYLES["header"]}>
        <TopBar
          back={{
            onPress: goBack,
            label: t("subscribe"),
            textColor: PALETTE["WHITE"],
            icon: <ChevronLeft color={PALETTE["WHITE"]} />,
          }}
        />

        <Column justifyContent="center" alignItems="center">
          <Crown size={60} />
          <Typography style={STYLES["title"]}>Findak Premium</Typography>
          <Typography style={STYLES["subtitle"]}>
            {t("be_the_first_and_without_limits")}
          </Typography>
        </Column>
        <Column marginTop={40}>
          <Typography style={STYLES["about"]}>
            {t("as_a_premium_user_you_can")}
          </Typography>
          <Column gap={20} style={STYLES["ul"]}>
            <Row style={STYLES["li"]} gap={15}>
              <Sent size={24} strokeWidth={2} color={PALETTE["WHITE"]} />
              <Typography style={STYLES["li_label"]}>
                {t("send_unlimited_offers")}
              </Typography>
            </Row>
            <Row style={STYLES["li"]} gap={15}>
              <Search size={27} strokeWidth={0.5} color={PALETTE["WHITE"]} />
              <Typography style={STYLES["li_label"]}>
                {t("send_unlimited_searches")}
              </Typography>
            </Row>
            <Row style={STYLES["li"]} gap={15}>
              <Bell size={24} strokeWidth={3} color={PALETTE["WHITE"]} />
              <Typography style={STYLES["li_label"]}>
                {t(
                  "find_out_first_than_others_when_a_search_of_your_preference"
                )}
              </Typography>
            </Row>
            <Row style={STYLES["li"]} gap={15}>
              <MessageCircle
                size={24}
                strokeWidth={3}
                color={PALETTE["WHITE"]}
              />
              <Typography style={STYLES["li_label"]}>
                {t("your_use_of_chat_with_users_will_be_enabled")}
              </Typography>
            </Row>
          </Column>
        </Column>
        <Wave style={STYLES["wave"]} color={PALETTE["PRIMARY"]} />
      </View>
    </View>
  );
};
