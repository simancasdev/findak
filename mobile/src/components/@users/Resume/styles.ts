import {PALETTE} from "src/styles";
import {StyleSheet} from "react-native";

export const STYLES = StyleSheet.create({
  user_resume: {
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
  },
  user_content: {
    transform: [{translateY: -65}],
    position: "relative",
    width: "90%",
    alignSelf: "center",
  },
  user_avatar: {
    borderWidth: 4,
    marginBottom: 10,
  },
  send_message: {
    marginTop: 8,
    maxWidth: 185,
    backgroundColor: PALETTE["PRIMARY"],
  },
});
