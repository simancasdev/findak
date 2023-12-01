import {PALETTE} from "src/styles";
import {WIDTH_SCREEN} from "src/utils";
import {StyleSheet} from "react-native";
import {PADDING_HORIZONTAL} from "../../styles";

export const STYLES = StyleSheet.create({
  actions: {
    width: "100%",
    marginTop: 8,
    paddingHorizontal: PADDING_HORIZONTAL,
  },
  button: {
    height: 38,
    paddingVertical: 0,
    borderRadius: 3,
    width: (WIDTH_SCREEN - PADDING_HORIZONTAL) / 2.1,
  },
  label_overview: {
    color: PALETTE["WHITE"],
    fontSize: 14,
  },
  send_only: {
    width: "100%",
    backgroundColor: PALETTE["PRIMARY"],
    height: 46,
    marginTop: 5,
  },
});
