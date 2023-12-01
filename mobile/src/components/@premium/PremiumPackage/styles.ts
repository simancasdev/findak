import {WIDTH_SCREEN} from "src/utils";
import {StyleSheet} from "react-native";
import {PALETTE, styleOS} from "src/styles";

export const STYLES = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
    position: "relative",
    width: "100%",
    alignSelf: "center",
    paddingBottom: 15,
    backgroundColor: PALETTE["PRIMARY"],
  },
  wave: {
    width: WIDTH_SCREEN,
    height: 300,
    position: "absolute",
    bottom: -180,
    left: 0,
  },
  title: {
    fontSize: 24,
    color: PALETTE["WHITE"],
    fontWeight: styleOS("600"),
  },
  subtitle: {
    color: PALETTE["WHITE"],
  },
  about: {
    fontSize: 17,
    fontWeight: styleOS("500"),
    color: PALETTE["WHITE"],
  },
  ul: {
    padding: 15,
  },
  li: {
    width: WIDTH_SCREEN / 1.3,
  },
  li_label: {
    fontWeight: styleOS("500"),
    color: PALETTE["WHITE"],
  },
});
