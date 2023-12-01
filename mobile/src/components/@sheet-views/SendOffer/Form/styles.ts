import {StyleSheet} from "react-native";
import {DEFAULT_INPUT_STYLE} from "src/styles";

export const STYLES = StyleSheet.create({
  form_offer: {
    padding: 10,
    paddingVertical: 0,
    marginBottom: 5,
    borderRadius: 5,
  },
  input: {
    ...DEFAULT_INPUT_STYLE,
    fontSize: 20,
    width: "100%",
    padding: 5,
    marginTop: 10,
    borderRadius: 5,
    maxHeight: 150,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    paddingHorizontal: 0,
  },
});
