import {PALETTE, styleOS} from "src/styles";
import {StyleSheet} from "react-native";

export const STYLES = StyleSheet.create({
  icon_box: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  indicator: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: PALETTE["PRIMARY"],
    width: 20,
    height: 20,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  indicator_number: {
    color: PALETTE["WHITE"],
    fontWeight: styleOS("600"),
  },
});
