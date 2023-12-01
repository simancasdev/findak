import {StyleSheet} from "react-native";
import {HEIGHT_SCREEN} from "src/utils";
import {PALETTE, styleOS} from "src/styles";

export const STYLES = StyleSheet.create({
  buy_section: {
    position: "absolute",
    bottom: HEIGHT_SCREEN / 15,
    left: 0,
    width: "100%",
  },
  buy_button: {
    width: "75%",
    padding: 12,
    borderRadius: 5,
    backgroundColor: PALETTE["PRIMARY"],
  },
  button_label: {
    fontWeight: styleOS("500"),
    color: PALETTE["WHITE"],
  },
});
