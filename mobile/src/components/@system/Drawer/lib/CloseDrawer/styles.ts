import {StyleSheet} from "react-native";
import {DRAWER_WIDTH} from "../../styles";
import {HEIGHT_SCREEN, WIDTH_SCREEN} from "src/utils";

export const STYLES = StyleSheet.create({
  close_layer: {
    top: 0,
    right: 0,
    position: "absolute",
    height: HEIGHT_SCREEN,
    width: WIDTH_SCREEN - DRAWER_WIDTH,
  },
});
