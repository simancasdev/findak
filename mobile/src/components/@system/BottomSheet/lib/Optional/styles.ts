import {PALETTE} from "src/styles";
import {StyleSheet} from "react-native";

export const STYLES = StyleSheet.create({
  sheet: {
    shadowColor: PALETTE["BLACK"],
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.08,
    shadowRadius: 2,
  },
  container_optional: {
    paddingTop: 19,
    paddingHorizontal: 10,
    flex: 1,
  },
});
