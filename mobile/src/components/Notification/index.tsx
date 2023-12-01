import {STYLES} from "./styles";
import {styleOS} from "src/styles";
import {Image, View} from "react-native";
import {useMoment, useTheme} from "src/hooks";
import {NotificationModel} from "src/interfaces";
import {useBuildNotificationUI, useNotificationAction} from "./hooks";
import {Avatar, Column, Row, Touchable, Typography} from "../@system";

interface NotificationProps {
  notification: NotificationModel;
}

export const Notification: React.FC<NotificationProps> = ({notification}) => {
  const {colors} = useTheme();
  const {moment} = useMoment();
  const {createdAt, readed} = notification;
  const {from, message, title, icon} = useBuildNotificationUI(notification);
  const {onPress} = useNotificationAction();

  return (
    <Touchable
      onPress={() => onPress(notification)}
      style={{position: "relative"}}
    >
      <Row
        gap={15}
        style={[
          STYLES["notification"],
          {backgroundColor: !readed ? colors["HOVER_LIGHT"] : "transparent"},
        ]}
      >
        {icon ? (
          <Image style={STYLES["icon"]} source={icon} />
        ) : (
          <Avatar
            size={40}
            src={from["avatar_url"]}
            name={from["first_name"]}
          />
        )}
        <Column style={{flexShrink: 1}} gap={2}>
          <Typography fontSize={14} fontWeight={styleOS("600")}>
            {title}
          </Typography>
          <Typography fontSize={12} fontWeight={styleOS("400")}>
            {message}
          </Typography>
          <Typography
            style={[STYLES["date"], {color: colors["TEXT_TRANSPARENCY"]}]}
          >
            {moment(createdAt).fromNow()}
          </Typography>
        </Column>
      </Row>
      <View
        style={STYLES["border"]}
        children={
          <View style={[STYLES["line"], {backgroundColor: colors["BORDER"]}]} />
        }
      />
    </Touchable>
  );
};
