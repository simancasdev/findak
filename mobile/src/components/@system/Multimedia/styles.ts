import {PALETTE} from "src/styles";
import {StyleSheet} from "react-native";
import {HEIGHT_SCREEN, WIDTH_SCREEN} from "src/utils";

export const STYLES = StyleSheet.create({
  multimedia: {
    top: 0,
    left: 0,
    zIndex: 9999,
    position: "absolute",
    width: WIDTH_SCREEN,
    alignItems: "center",
    height: HEIGHT_SCREEN,
    justifyContent: "center",
    backgroundColor: PALETTE["BLACK"],
  },
});
