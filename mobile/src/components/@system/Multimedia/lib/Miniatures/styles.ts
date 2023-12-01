import {StyleSheet} from "react-native";
import {HEIGHT_SCREEN, WIDTH_SCREEN} from "src/utils";

export const STYLES = StyleSheet.create({
  miniatures: {
    left: 0,
    position: "absolute",
    bottom: HEIGHT_SCREEN / 15,
    width: WIDTH_SCREEN,
    height: 100,
    zIndex: 999999,
  },
  miniature: {
    width: 70,
    height: 70,
    resizeMode: "cover",
  },
});
