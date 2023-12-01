import {STYLES} from "./styles";
import {ViewParam} from "src/interfaces";
import {useNavigation} from "@react-navigation/native";
import {BellFilled, FindakIsotype, Forum} from "src/svg";
import {useAppSelector, useLang, useTheme} from "src/hooks";
import {
  selectAuthState,
  selectSearchState,
  selectMessengerState,
  selectNotificationState,
} from "src/redux/slices";
import {
  Row,
  Badge,
  Column,
  IconBox,
  Guideline,
  Typography,
  NumberIndicator,
} from "src/components/@system";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const {t} = useLang();
  const {colors} = useTheme();
  const {user} = useAppSelector(selectAuthState);
  const {alerts} = useAppSelector(selectSearchState);
  const {allUnReadMessages} = useAppSelector(selectMessengerState);
  const {unReadNotifications} = useAppSelector(selectNotificationState);
  const {navigate} = useNavigation<ViewParam<"Notifications" | "Messenger">>();
  const {preferences} = user;

  return (
    <Column style={STYLES["header"]}>
      <Row style={STYLES["accesses"]}>
        <Row>
          <FindakIsotype />
          <Typography style={STYLES["title"]}>{t("home")}</Typography>
        </Row>
        <Row gap={10}>
          <IconBox
            size={40}
            borderRadius={100}
            indicatorNumber={unReadNotifications.length}
            icon={<BellFilled color={colors["WHITE_BLACK"]} />}
            onPress={() => {
              navigate("Notifications");
            }}
          />
          <IconBox
            size={40}
            borderRadius={100}
            indicatorNumber={allUnReadMessages.length}
            onPress={() => navigate("Messenger")}
            icon={<Forum color={colors["WHITE_BLACK"]} />}
          />
        </Row>
      </Row>
      <Column gap={10}>
        <Row gap={10}>
          <Row>
            <NumberIndicator
              size={22}
              fontSize={13}
              number={alerts["data"].length}
            />
            <Guideline fontSize={14}>
              {t("searches_of_your_interest")}
            </Guideline>
          </Row>
        </Row>
        <Badge
          label={
            preferences["search_alert"]
              ? t(preferences["search_alert"]["name"])
              : t("loading")
          }
        />
      </Column>
    </Column>
  );
};
