import {PALETTE} from "src/styles";
import {StyleSheet} from "react-native";

export const STYLES = StyleSheet.create({
  tabs: {},
  href: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    paddingHorizontal: 12,
    height: 40,
  },
  highlighted: {
    position: "absolute",
    backgroundColor: PALETTE["PRIMARY"],
    bottom: 5,
    left: 13,
    width: "100%",
    height: 3,
    borderRadius: 100,
  },
});
