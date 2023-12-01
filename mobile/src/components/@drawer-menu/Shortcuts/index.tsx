import {memo} from "react";
import {STYLES} from "./styles";
import {ViewParam} from "src/interfaces";
import {BellFilled, Forum, StarFilled} from "src/svg";
import {useNavigation} from "@react-navigation/native";
import {useAppDispatch, useAppSelector, useLang, useTheme} from "src/hooks";
import {
  toggleDrawer,
  selectAuthState,
  selectMessengerState,
  selectNotificationState,
} from "src/redux/slices";
import {
  Column,
  IconBox,
  Guideline,
  RowScrollable,
} from "src/components/@system";

interface ShortcutsProps {}

type ShortcutViews = ViewParam<"Notifications" | "Feedbacks" | "Messenger">;

export const Shortcuts: React.FC<ShortcutsProps> = memo(() => {
  const {t} = useLang();
  const {colors} = useTheme();
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation<ShortcutViews>();
  const {authUserId} = useAppSelector(selectAuthState);
  const {allUnReadMessages} = useAppSelector(selectMessengerState);
  const {unReadNotifications} = useAppSelector(selectNotificationState);

  return (
    <Column gap={0} style={STYLES["shortcuts"]}>
      <Guideline style={{marginHorizontal: 10}}>{t("shortcuts")}</Guideline>
      <RowScrollable rowHeight={60} style={{paddingLeft: 10}} fullWidth>
        <IconBox
          size={40}
          borderRadius={100}
          indicatorNumber={unReadNotifications.length}
          icon={<BellFilled color={colors["WHITE_BLACK"]} />}
          onPress={() => {
            navigate("Notifications");
            dispatch(toggleDrawer(false));
          }}
        />
        <IconBox
          size={40}
          borderRadius={100}
          indicatorNumber={allUnReadMessages.length}
          icon={<Forum color={colors["WHITE_BLACK"]} />}
          onPress={() => {
            navigate("Messenger");
            dispatch(toggleDrawer(false));
          }}
        />
        <IconBox
          size={40}
          borderRadius={100}
          icon={<StarFilled color={colors["WHITE_BLACK"]} />}
          onPress={() => {
            navigate("Feedbacks", {
              userId: authUserId,
              title: t("feedbacks"),
            });
            dispatch(toggleDrawer(false));
          }}
        />
      </RowScrollable>
    </Column>
  );
});
