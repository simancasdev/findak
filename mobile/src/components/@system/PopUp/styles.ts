import {PALETTE} from "src/styles";
import {StyleSheet} from "react-native";
import {HEIGHT_SCREEN, WIDTH_SCREEN} from "src/utils";

export const STYLES = StyleSheet.create({
  overlay: {
    width: WIDTH_SCREEN,
    height: HEIGHT_SCREEN,
    justifyContent: "center",
    position: "absolute",
    alignItems: "center",
    zIndex: 999999,
  },
  pop_up: {
    width: WIDTH_SCREEN,
    height: HEIGHT_SCREEN,
    backgroundColor: PALETTE["BLACK05"],
    position: "absolute",
    zIndex: 999,
    top: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: 15,
    zIndex: 9999,
    left: 0,
    right: 0,
    borderRadius: 10,
    backgroundColor: "red",
  },
});
