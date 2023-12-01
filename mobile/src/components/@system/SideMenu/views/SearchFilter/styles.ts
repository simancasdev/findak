import {StyleSheet} from "react-native";
import {HEIGHT_SCREEN} from "src/utils";

export const STYLES = StyleSheet.create({
  search_filter: {
    flex: 1,
    position: "relative",
    backgroundColor: "transparent",
  },
  button_submit: {
    left: 0,
    width: "100%",
    position: "absolute",
    bottom: -(HEIGHT_SCREEN / 27),
  },
});
