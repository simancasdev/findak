import {styleOS} from "src/styles";
import {StyleSheet} from "react-native";

export const STYLES = StyleSheet.create({
  indicator: {
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  indicator_number: {
    fontWeight: styleOS("600"),
  },
});
