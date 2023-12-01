import {StyleSheet} from "react-native";
import {PALETTE, styleOS} from "src/styles";

export const STYLES = StyleSheet.create({
  description: {
    padding: 20,
  },
  off: {
    backgroundColor: PALETTE["TERTIARY"],
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  off_label: {
    color: PALETTE["WHITE"],
    fontWeight: styleOS("600"),
  },
  heart_box: {
    // borderRadius: 100,
  },
});
