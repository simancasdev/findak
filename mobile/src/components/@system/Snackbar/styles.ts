import {StyleSheet} from "react-native";
import {PALETTE, styleOS} from "src/styles";

export const STYLES = StyleSheet.create({
  snackbar: {
    width: "100%",
    padding: 8,
    borderRadius: 4,
    shadowColor: PALETTE["BLACK"],
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  message: {
    fontSize: 13,
    flexShrink: 1,
    fontWeight: styleOS("500"),
    color: PALETTE["WHITE"],
  },
});
