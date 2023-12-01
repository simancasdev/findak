import {styleOS} from "src/styles";
import {StyleSheet} from "react-native";

export const STYLES = StyleSheet.create({
  head: {
    width: "100%",
    padding: 10,
    marginTop: 12,
  },
  head_label: {
    fontSize: 17,
    fontWeight: styleOS("500"),
  },
});
