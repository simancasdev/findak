import {styleOS} from "src/styles";
import {StyleSheet} from "react-native";

export const STYLES = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: styleOS("600"),
  },
  screen_head: {
    height: 55,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
});
