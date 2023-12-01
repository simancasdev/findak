import {styleOS} from "src/styles";
import {StyleSheet} from "react-native";

export const STYLES = StyleSheet.create({
  box: {
    width: 120,
    borderRadius: 10,
  },
  value_label: {
    fontSize: 32,
    marginTop: 7,
    fontWeight: styleOS("500"),
  },
});
