import {StyleSheet} from "react-native";
import {PALETTE, styleOS} from "src/styles";

export const STYLES = StyleSheet.create({
  switch_button: {
    padding: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 5,
  },
  button: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    height: 45,
    borderRadius: 5,
    flexDirection: "row",
    alignContent: "center",
  },
  selected: {
    backgroundColor: PALETTE["PRIMARY"],
  },
  placeholder: {},
  button_label: {
    marginLeft: 5,
    fontWeight: styleOS("500"),
  },
  button_label_selected: {},
});
