import {StyleSheet} from "react-native";
import {DEFAULT_INPUT_STYLE} from "src/styles";

export const STYLES = StyleSheet.create({
  input: {
    ...DEFAULT_INPUT_STYLE,
    fontSize: 20,
    width: "100%",
    padding: 5,
    borderRadius: 5,
    maxHeight: 150,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    paddingHorizontal: 0,
  },
  top_bar: {
    width: "100%",
    marginBottom: 20,
  },
});
