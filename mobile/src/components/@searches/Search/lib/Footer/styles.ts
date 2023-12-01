import {PALETTE} from "src/styles";
import {StyleSheet} from "react-native";
import {PADDING_HORIZONTAL} from "../../styles";

export const STYLES = StyleSheet.create({
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: PADDING_HORIZONTAL,
  },
  dot: {
    width: 5,
    height: 5,
    backgroundColor: PALETTE["BLACK"],
    borderRadius: 100,
  },
});
