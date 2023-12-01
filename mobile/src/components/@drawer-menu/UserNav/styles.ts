import {StyleSheet} from "react-native";
import {PALETTE, styleOS} from "src/styles";

export const STYLES = StyleSheet.create({
  user_nav: {
    padding: 10,
    width: "100%",
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: styleOS("500"),
  },
  location_label: {
    fontSize: 12,
  },
});
