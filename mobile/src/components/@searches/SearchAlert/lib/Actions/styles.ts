import {PALETTE} from "src/styles";
import {WIDTH_SCREEN} from "src/utils";
import {StyleSheet} from "react-native";
import {PADDING_HORIZONTAL} from "../../../Search/styles";

export const STYLES = StyleSheet.create({
  actions: {
    marginTop: 8,
    borderTopWidth: 0.2,
    borderTopColor: "rgba(0,0,0, .1)",
    paddingHorizontal: PADDING_HORIZONTAL,
  },
  button: {
    width: (WIDTH_SCREEN - PADDING_HORIZONTAL) / 2.1,
  },
  label_overview: {
    color: PALETTE["WHITE"],
    fontSize: 14,
  },
  send_only: {
    width: "100%",
    backgroundColor: PALETTE["PRIMARY"],
    paddingVertical: 14,
  },
  none: {},
  all: {},
});
