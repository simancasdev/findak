import {StyleSheet} from "react-native";
import {PALETTE, styleOS} from "src/styles";

export const STYLES = StyleSheet.create({
  message_preview: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  indicator: {
    width: 25,
    height: 25,
    borderRadius: 100,
    backgroundColor: PALETTE["SECONDARY"],
    justifyContent: "center",
    alignItems: "center",
  },
  indicator_label: {
    fontSize: 13,
    fontWeight: styleOS("500"),
    color: PALETTE["WHITE"],
  },
  avatar_icon: {
    width: 30,
    height: 30,
    position: "absolute",
    bottom: -8,
    right: -5,
    borderWidth: 2,
  },
  avatar_image: {
    width: 30,
    height: 30,
    borderRadius: 100,
    position: "absolute",
    bottom: -8,
    right: -5,
    resizeMode: "cover",
    borderWidth: 2,
  },
});
