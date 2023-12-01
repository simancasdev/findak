import {styleOS} from "src/styles";
import {StyleSheet} from "react-native";

export const STYLES = StyleSheet.create({
  actions: {},
  button: {
    width: "100%",
    justifyContent: "flex-start",
  },
  label: {
    fontWeight: styleOS("500"),
    fontSize: 13,
    marginLeft: 5,
  },
});
