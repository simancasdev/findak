import {PALETTE} from "src/styles";
import {StyleSheet} from "react-native";

export const STYLES = StyleSheet.create({
  sheet: {
    shadowColor: PALETTE["BLACK"],
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: "hidden",
  },
  main_container: {
    paddingTop: 10,
    paddingHorizontal: 10,
  },
});
