import {PALETTE} from "src/styles";
import {WIDTH_SCREEN} from "src/utils";
import {StyleSheet} from "react-native";

export const STYLES = StyleSheet.create({
  box: {
    maxWidth: WIDTH_SCREEN / 1.3,
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
  },
  sent: {
    backgroundColor: PALETTE["PRIMARY"],
    alignSelf: "flex-end",
  },
  received: {
    backgroundColor: PALETTE["SECONDARY"],
  },
  message_text: {
    fontSize: 15,
    lineHeight: 24,
  },
});
