import {PALETTE} from "src/styles";
import {StyleSheet} from "react-native";

export const STYLES = StyleSheet.create({
  sender_status: {
    width: "12%",
    position: "relative",
  },
  status: {
    position: "absolute",
    top: 15,
    right: 0,
    backgroundColor: PALETTE["PRIMARY"],
    width: 25,
    height: 25,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
