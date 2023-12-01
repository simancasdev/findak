import {PALETTE} from "src/styles";
import {StyleSheet} from "react-native";
import {HEIGHT_SCREEN, WIDTH_SCREEN} from "src/utils";

export const SIDE_MENU_WIDTH = WIDTH_SCREEN / 1.2;

export const STYLES = StyleSheet.create({
  side_menu: {
    position: "absolute",
    top: 0,
    left: 0,
    width: WIDTH_SCREEN,
    height: HEIGHT_SCREEN,
    backgroundColor: PALETTE["BLACK02"],
  },
  side_container: {
    position: "absolute",
    top: 0,
    right: 0,
    width: SIDE_MENU_WIDTH,
    height: HEIGHT_SCREEN,
    borderLeftColor: PALETTE["BLACK01"],
    shadowColor: PALETTE["BLACK"],
    shadowOffset: {width: -2, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    borderLeftWidth: 1,
    zIndex: 999,
    paddingVertical: HEIGHT_SCREEN / 15,
    paddingHorizontal: 10,
  },
});
