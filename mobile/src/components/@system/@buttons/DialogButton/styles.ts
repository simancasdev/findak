import {StyleSheet} from "react-native";
import {PALETTE, styleOS} from "src/styles";

export const STYLES = StyleSheet.create({
  button: {
    backgroundColor: PALETTE["PRIMARY"],
    borderRadius: 100,
    padding: 16,
    paddingVertical: 12,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  button_primary: {
    backgroundColor: PALETTE["PRIMARY"],
  },
  button_secondary: {
    backgroundColor: "transparent",
  },
  label: {
    fontWeight: styleOS("500"),
  },
  label_primary: {
    color: PALETTE["WHITE"],
  },
  label_secondary: {},
});
