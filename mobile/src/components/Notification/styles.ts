import {styleOS} from "src/styles";
import {StyleSheet} from "react-native";

export const STYLES = StyleSheet.create({
  notification: {
    paddingVertical: 10,
    flexShrink: 1,
    paddingHorizontal: 20,
  },
  border: {
    position: "absolute",
    bottom: 0,
    left: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  line: {
    height: 0.5,
    width: "50%",
  },
  date: {
    fontSize: 11,
    fontWeight: styleOS("400"),
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 100,
    resizeMode: "contain",
  },
});
