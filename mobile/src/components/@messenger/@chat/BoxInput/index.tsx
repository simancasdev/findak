import {Send} from "src/svg";
import {useState} from "react";
import {STYLES} from "./styles";
import {View} from "react-native";
import {useChat} from "../context";
import {IconBox, Input} from "src/components/@system";
import {useAppDispatch, useAppSelector, useLang, useTheme} from "src/hooks";
import {
  sendMessage,
  SEND_MESSAGE_LOADER,
  selectMessengerState,
} from "src/redux/slices";

interface BoxInputProps {}

export const BoxInput: React.FC<BoxInputProps> = () => {
  const {t} = useLang();
  const {withUser, type} = useChat();
  const dispatch = useAppDispatch();
  const {colors, theme} = useTheme();
  const {APIStatus} = useAppSelector(selectMessengerState);
  const sending = APIStatus["sendingMessage"];
  const [newMessage, setNewMessage] = useState<string>("");

  return (
    <View style={[STYLES["box"]]}>
      <Input
        multiline
        placeholder={`${t("talk_to")} ${withUser["first_name"]}...`}
        defaultValue={newMessage}
        containerStyle={{width: "85%"}}
        onChangeText={(text) => setNewMessage(text)}
        style={[
          STYLES["input"],
          STYLES[`input_${theme}`],
          {color: colors["WHITE_BLACK"]},
        ]}
      />
      <IconBox
        loaderId={SEND_MESSAGE_LOADER}
        disabled={!newMessage.length || sending}
        icon={<Send color={colors["WHITE_BLACK"]} />}
        style={[
          STYLES["send_button"],
          {backgroundColor: colors["HOVER_LIGHT"]},
        ]}
        onPress={() => {
          dispatch(sendMessage({message: newMessage, type}));
          setNewMessage("");
        }}
      />
    </View>
  );
};
