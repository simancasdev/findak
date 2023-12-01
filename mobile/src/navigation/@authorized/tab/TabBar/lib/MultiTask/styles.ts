import {PALETTE} from "src/styles";
import {StyleSheet} from "react-native";
import {NAV_ITEM_HEIGHT, NAV_ITEM_WIDTH} from "../NavItem/styles";

export const STYLES = StyleSheet.create({
  multi_task: {
    width: NAV_ITEM_WIDTH,
    height: NAV_ITEM_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  view_indicator: {
    position: "absolute",
    bottom: 5,
    right: 28,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: PALETTE["PRIMARY"],
  },
});
