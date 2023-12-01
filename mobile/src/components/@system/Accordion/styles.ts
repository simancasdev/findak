import {StyleSheet} from "react-native";
import {PALETTE, styleOS} from "src/styles";

export const STYLES = StyleSheet.create({
  alert: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 999,
    width: "85%",
    left: "8,5%",
    height: 50,
    borderRadius: 4,
    shadowColor: PALETTE["BLACK"],
    shadowOffset: {width: -2, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    paddingHorizontal: 10,
  },
  success: {
    backgroundColor: PALETTE["PRIMARY"],
  },
  error: {},
  title: {
    color: PALETTE["WHITE"],
    fontWeight: styleOS("500"),
  },
});
