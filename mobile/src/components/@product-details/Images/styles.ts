import {StyleSheet} from "react-native";
import {PALETTE, styleOS} from "src/styles";

export const STYLES = StyleSheet.create({
  images: {
    position: "relative",
  },
  pagination: {
    backgroundColor: PALETTE["BLACK05"],
    position: "absolute",
    bottom: 10,
    right: 10,
    padding: 10,
    paddingVertical: 6,
    borderRadius: 100,
  },
  pagination_label: {
    color: PALETTE["WHITE"],
    fontWeight: styleOS("600"),
    fontSize: 12,
  },
});
