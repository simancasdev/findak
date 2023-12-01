import {StyleSheet} from "react-native";
import {HEIGHT_SCREEN, WIDTH_SCREEN} from "src/utils";

export const STYLES = StyleSheet.create({
  screen_loader: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    top: 0,
    left: 0,
    height: HEIGHT_SCREEN,
    width: WIDTH_SCREEN,
  },
  st_isotype: {
    width: 30,
    height: 30,
  },
  powered_by: {
    position: "absolute",
    bottom: 50,
  },
  powered_by_st: {
    fontWeight: "500",
  },
});
