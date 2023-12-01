import {StyleSheet} from "react-native";
import {PALETTE, styleOS} from "src/styles";
import {HEIGHT_SCREEN, WIDTH_SCREEN} from "src/utils";

export const STYLES = StyleSheet.create({
  toolbar: {
    left: 0,
    zIndex: 99999,
    width: WIDTH_SCREEN,
    position: "absolute",
    paddingHorizontal: 5,
    top: HEIGHT_SCREEN / 15,
  },
  title: {
    color: PALETTE["WHITE"],
    fontWeight: styleOS("700"),
    fontSize: 18,
  },
  helper_text: {
    color: PALETTE["WHITE"],
    fontSize: 12,
  },
});
