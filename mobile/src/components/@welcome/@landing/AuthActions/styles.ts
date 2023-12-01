import {StyleSheet} from "react-native";
import {PALETTE, styleOS} from "src/styles";

export const STYLES = StyleSheet.create({
  container: {
    padding: 20,
    paddingHorizontal: 35,
  },
  default_button: {
    width: "100%",
    padding: 10,
    borderRadius: 100,
    height: 45,
    paddingHorizontal: 30,
    shadowColor: PALETTE["BLACK"],
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  button_label: {
    fontWeight: styleOS("600"),
    fontSize: 15,
  },
});
