import {PALETTE} from "src/styles";
import {StyleSheet} from "react-native";
import {HEIGHT_SCREEN, WIDTH_SCREEN} from "src/utils";

export const STYLES = StyleSheet.create({
  overlap: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    width: WIDTH_SCREEN,
    height: HEIGHT_SCREEN,
    zIndex: 999,
    left: 0,
    top: 0,
    backgroundColor: PALETTE["BLACK03"],
  },
  dialog: {
    padding: 10,
    width: WIDTH_SCREEN / 1.1,
    borderRadius: 10,
    shadowColor: PALETTE["BLACK"],
    shadowOffset: {width: -2, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    paddingHorizontal: 10,
  },
  close_button: {
    borderRadius: 100,
    backgroundColor: PALETTE["PLACEHOLDER"],
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    marginVertical: 10,
  },
});
