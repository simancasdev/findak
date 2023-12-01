import {PALETTE} from "src/styles";
import {StyleSheet} from "react-native";

export const PADDING_HORIZONTAL = 15;

export const STYLES = StyleSheet.create({
  search: {
    borderRadius: 4,
    paddingVertical: 15,
  },
  none: {
    borderRadius: 4,
    paddingHorizontal: 0,
    backgroundColor: PALETTE["PLACEHOLDER"],
  },
  all: {},
  send_only: {},
});
