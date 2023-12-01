import {StyleSheet} from "react-native";
import {PALETTE, styleOS} from "src/styles";

export const STYLES = StyleSheet.create({
  trade_succeed: {
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    borderRadius: 5,
  },
  button_label: {
    color: PALETTE["WHITE"],
    fontWeight: styleOS("500"),
  },
});
