import {StyleSheet} from "react-native";
import {DEFAULT_INPUT_STYLE, PALETTE, styleOS} from "src/styles";

export const STYLES = StyleSheet.create({
  dropdown: {
    ...DEFAULT_INPUT_STYLE,
    paddingHorizontal: 5,
    paddingVertical: 11,
  },

  label: {
    fontSize: 13,
  },
  helper_text: {
    fontSize: 11,
    fontWeight: styleOS("400"),
  },
});
