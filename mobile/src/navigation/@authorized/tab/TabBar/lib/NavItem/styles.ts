import {WIDTH_SCREEN} from "src/utils";
import {StyleSheet} from "react-native";
import {PALETTE, styleOS} from "src/styles";

export const NAV_ITEM_WIDTH = WIDTH_SCREEN / 4;
export const NAV_ITEM_HEIGHT = 50;

export const STYLES = StyleSheet.create({
  item: {
    justifyContent: "center",
    alignItems: "center",
    width: NAV_ITEM_WIDTH,
    height: NAV_ITEM_HEIGHT,
  },
  name: {
    fontWeight: styleOS("400"),
    fontSize: 11,
    marginTop: 4,
  },
  light: {
    color: "rgba(0,0,0, .5)",
  },
  dark: {
    color: "rgba(255,255,255, .7)",
  },
  name_focused: {
    color: PALETTE["WHITE"],
    fontWeight: styleOS("600"),
  },
});
