import {StyleSheet} from "react-native";
import {PALETTE, styleOS} from "src/styles";

export const STYLES = StyleSheet.create({
  landing_header: {
    position: "relative",
    alignItems: "center",
    marginTop: 35,
  },
  title: {
    color: PALETTE["WHITE"],
    textAlign: "center",
    width: 300,
    fontWeight: styleOS("500"),
    fontSize: 16,
  },
});
