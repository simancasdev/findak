import {PALETTE} from "src/styles";
import {WIDTH_SCREEN} from "src/utils";
import {StyleSheet} from "react-native";

export const STYLES = StyleSheet.create({
  search_button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: PALETTE["PRIMARY"],
    height: 50,
    width: 50,
    borderRadius: 100,
    position: "absolute",
    right: WIDTH_SCREEN / 35,
    bottom: 60,
    zIndex: 999,
    shadowColor: PALETTE["BLACK"],
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  touchable: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
