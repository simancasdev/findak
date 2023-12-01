import {WIDTH_SCREEN} from "src/utils";
import {StyleSheet} from "react-native";
import {PALETTE, styleOS} from "src/styles";

export const STYLES = StyleSheet.create({
  header: {
    position: "relative",
  },
  top_bar: {
    paddingHorizontal: 10,
  },
  high_five: {
    left: 50,
    zIndex: 5,
    bottom: -50,
    width: 70,
    height: 70,
    position: "absolute",
    resizeMode: "contain",
  },
  wave: {
    position: "absolute",
    top: -50,
    left: 0,
    height: 190,
    zIndex: -1,
    width: WIDTH_SCREEN,
  },
  share: {
    top: 8,
    right: 8,
    position: "absolute",
  },
  share_label: {
    color: PALETTE["WHITE"],
    fontSize: 11,
    fontWeight: styleOS("500"),
  },
});
