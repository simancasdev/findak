import {StyleSheet} from "react-native";
import {PALETTE, styleOS} from "src/styles";

export const STYLES = StyleSheet.create({
  alert: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 999,
    left: 0,
    width: "100%",
  },
  alert_box: {
    borderRadius: 4,
    shadowColor: PALETTE["BLACK"],
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: {width: -2, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    padding: 15,
    paddingHorizontal: 22,
    flexGrow: 1,
  },
  success: {
    backgroundColor: PALETTE["PRIMARY"],
  },
  error: {
    backgroundColor: PALETTE["ERROR"],
  },
  title: {
    color: PALETTE["WHITE"],
    fontWeight: styleOS("500"),
  },
});
