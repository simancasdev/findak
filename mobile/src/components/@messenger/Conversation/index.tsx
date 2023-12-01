import {Fragment} from "react";
import {STYLES} from "./styles";
import {Image, View} from "react-native";
import {PALETTE, styleOS} from "src/styles";
import {selectAuthState} from "src/redux/slices";
import {WIDTH_SCREEN, compareIds} from "src/utils";
import {useNavigation} from "@react-navigation/native";
import {useAppSelector, useTheme, useMoment} from "src/hooks";
import {
  UserModel,
  ViewParam,
  MessageModel,
  ConversationModel,
} from "src/interfaces";
import {
  Row,
  Avatar,
  Column,
  Touchable,
  Typography,
  IconBox,
} from "src/components/@system";
import {MessageCircle, Trades} from "src/svg";

interface ConversationProps {
  conversation: ConversationModel<MessageModel[]>;
}

export const Conversation: React.FC<ConversationProps> = ({conversation}) => {
  const {colors} = useTheme();
  const {moment} = useMoment();
  const {authUserId} = useAppSelector(selectAuthState);
  const {navigate} = useNavigation<ViewParam<"Chat">>();
  const {id, type, sender, product, receiver, messages, unread_messages} =
    conversation;

  const Svg =
    type === "regular" ? MessageCircle : type === "trade" ? Trades : undefined;
  const areUnreadMessages: boolean = !!unread_messages.length;
  const lastMessage: MessageModel | undefined = messages[messages.length - 1];
  const userToDisplay: UserModel = compareIds([authUserId, sender["id"]])
    ? receiver
    : sender;

  return (
    <Touchable
      style={[
        STYLES["message_preview"],
        {
          backgroundColor: areUnreadMessages
            ? colors["HOVER_LIGHT"]
            : "transparent",
        },
      ]}
      onPress={() => {
        navigate("Chat", {
          type,
          product,
          withUser: userToDisplay,
          conversation_id: id,
        });
      }}
    >
      <Row gap={15} style={{width: "67%"}}>
        <View style={{position: "relative"}}>
          <Avatar
            size={45}
            src={userToDisplay["avatar_url"]}
            name={userToDisplay["first_name"]}
          />
          {Svg ? (
            <IconBox
              borderRadius={100}
              backgroundColor={PALETTE["SECONDARY"]}
              icon={<Svg size={18} color={PALETTE["WHITE"]} />}
              style={[
                STYLES["avatar_icon"],
                {borderColor: colors["BACKGROUND_VIEW"]},
              ]}
            />
          ) : (
            <Image
              source={{uri: product!["references_url"][0]}}
              style={[
                STYLES["avatar_image"],
                {borderColor: colors["BACKGROUND_VIEW"]},
              ]}
            />
          )}
        </View>
        <Column gap={5} style={{width: WIDTH_SCREEN / 2}}>
          <Typography fontSize={15} fontWeight={styleOS("500")}>
            {userToDisplay["first_name"]} {userToDisplay["last_name"]}
          </Typography>
          {lastMessage && (
            <Row style={{width: WIDTH_SCREEN / 3.4}}>
              <Avatar
                size={20}
                src={lastMessage["user"]["avatar_url"]}
                name={userToDisplay["last_name"]}
              />
              <Typography
                style={{color: colors["TEXT_TRANSPARENCY"]}}
                numberOfLines={1}
                fontSize={12}
              >
                {lastMessage["message"]}
              </Typography>
            </Row>
          )}
        </Column>
      </Row>
      <Column alignItems="flex-end" style={{width: "28%"}}>
        {!unread_messages.length ? (
          <Fragment />
        ) : (
          <View style={STYLES["indicator"]}>
            <Typography style={STYLES["indicator_label"]}>
              {unread_messages.length}
            </Typography>
          </View>
        )}
        {lastMessage && (
          <Typography
            fontSize={11}
            fontWeight={styleOS("500")}
            style={{color: colors["TEXT_TRANSPARENCY"]}}
          >
            {moment(lastMessage["createdAt"]).fromNow()}
          </Typography>
        )}
      </Column>
    </Touchable>
  );
};
