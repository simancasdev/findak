import {PALETTE} from "src/styles";
import {StyleSheet} from "react-native";

export const STYLES = StyleSheet.create({
  tag: {
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    backgroundColor: PALETTE["PRIMARY"],
    height: 32,
    padding: 6,
    paddingHorizontal: 8,
  },
  label: {
    color: PALETTE["WHITE"],
    marginLeft: 4,
  },
  label_small: {
    fontSize: 10,
  },
  label_normal: {
    fontSize: 12,
  },
  decorator: {
    position: "absolute",
    top: 11.5,
    left: -5,
    width: 10,
    height: 10,
    backgroundColor: PALETTE["PRIMARY"],
    transform: [{rotate: "45deg"}],
  },
});
