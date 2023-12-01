import {StyleSheet} from "react-native";
import {DEFAULT_INPUT_STYLE} from "src/styles";

export const STYLES = StyleSheet.create({
  box: {
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "space-between",
    height: 55,
  },
  input: {
    paddingTop: 12,
    height: 48,
    borderWidth: 0.5,
    ...DEFAULT_INPUT_STYLE,
  },
  input_light: {
    borderColor: "rgba(0,0,0, .1)",
  },
  input_dark: {
    borderColor: "rgba(255,255,255, .1)",
  },
  send_button: {
    justifyContent: "center",
    alignItems: "center",
    width: 45,
    height: 45,
    borderRadius: 100,
    marginLeft: 2,
  },
});
