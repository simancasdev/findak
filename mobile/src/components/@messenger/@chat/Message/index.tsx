import {STYLES} from "./styles";
import {View} from "react-native";
import {PALETTE} from "src/styles";
import {compareIds} from "src/utils";
import {useAppSelector} from "src/hooks";
import {MessageModel} from "src/interfaces";
import {selectAuthState} from "src/redux/slices";
import {Avatar, Row, Typography} from "../../../@system";

interface MessageProps {
  message: MessageModel;
}

export const Message: React.FC<MessageProps> = ({message}) => {
  const {message: text, user} = message;
  const {authUserId} = useAppSelector(selectAuthState);
  const itIsMe = compareIds([authUserId, user["id"]]);

  return (
    <Row justifyContent={itIsMe ? "flex-end" : "flex-start"}>
      {!itIsMe && (
        <Avatar size={25} src={user["avatar_url"]} name={user["first_name"]} />
      )}

      <View style={[STYLES["box"], STYLES[itIsMe ? "sent" : "received"]]}>
        <Typography style={[STYLES["message_text"], {color: PALETTE["WHITE"]}]}>
          {text}
        </Typography>
      </View>
      {itIsMe && (
        <Avatar size={25} src={user["avatar_url"]} name={user["first_name"]} />
      )}
    </Row>
  );
};
