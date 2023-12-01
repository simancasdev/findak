import {PALETTE} from "src/styles";
import {StyleSheet} from "react-native";

export const STYLES = StyleSheet.create({
  update_avatar: {
    position: "relative",
    width: 120,
    height: 120,
    borderRadius: 100,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  placeholder_box: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  box: {
    position: "absolute",
    bottom: -5,
    right: -5,
    width: 35,
    height: 35,
    backgroundColor: PALETTE["PRIMARY"],
    borderRadius: 5,
  },
});
