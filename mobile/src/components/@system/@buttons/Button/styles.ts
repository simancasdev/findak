import {StyleSheet} from "react-native";
import {PALETTE, styleOS} from "src/styles";

export const STYLES = StyleSheet.create({
  button: {
    paddingHorizontal: 15,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 100,
    height: 45,
  },
  disabled: {
    backgroundColor: PALETTE["DISABLED"],
  },
  button_filled: {
    backgroundColor: PALETTE["PRIMARY"],
  },
  button_text_only: {
    justifyContent: "center",
  },
  label_disabled: {
    color: "rgba(167, 167,167, .5)",
    fontWeight: styleOS("500"),
  },
  label_text_only: {
    color: PALETTE["PRIMARY"],
  },
  label: {
    fontSize: 14,
  },
  label_enabled: {
    fontWeight: styleOS("500"),
  },
  label_filled: {},
  enabled: {},
});
