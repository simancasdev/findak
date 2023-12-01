import {StyleSheet} from "react-native";
import {PALETTE, styleOS} from "src/styles";

export const STYLES = StyleSheet.create({
  people_liked: {
    padding: 20,
  },
  people_liked_label: {
    fontWeight: styleOS("500"),
    color: PALETTE["GREY"],
  },
});
