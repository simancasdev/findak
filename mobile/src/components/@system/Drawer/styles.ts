import {StyleSheet} from "react-native";
import {HEIGHT_SCREEN, WIDTH_SCREEN} from "src/utils";

export const DRAWER_DURATION = 250;
export const DRAWER_WIDTH = WIDTH_SCREEN / 1.3;

export const STYLES = StyleSheet.create({
  drawer: {
    flex: 1,
    top: 0,
    left: 0,
    width: DRAWER_WIDTH,
    position: "absolute",
    height: HEIGHT_SCREEN,
    zIndex: 999,
  },
  banner_premium: {
    width: "100%",
    paddingHorizontal: 15,
    borderRadius: 0,
  },
  container: {
    width: "100%",
    overflow: "hidden",
  },
});
