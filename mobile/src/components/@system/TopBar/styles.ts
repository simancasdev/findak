import {styleOS} from "src/styles";
import {StyleSheet} from "react-native";

export const STYLES = StyleSheet.create({
  top_bar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    marginTop: 8,
  },
  row: {
    flexShrink: 1,
  },
  back_button: {
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  label: {
    fontSize: 18,
    fontWeight: styleOS("500"),
  },
  helperText: {
    fontSize: 12,
  },
});
