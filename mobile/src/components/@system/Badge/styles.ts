import {PALETTE} from "src/styles";
import {StyleSheet} from "react-native";

export const STYLES = StyleSheet.create({
  badge: {
    padding: 5,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: PALETTE["PRIMARY_TRANSPARENCY"],
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 100,
  },
});
