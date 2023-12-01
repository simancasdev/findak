import {styleOS} from "src/styles";
import {StyleSheet} from "react-native";

export const STYLES = StyleSheet.create({
  empty: {
    paddingHorizontal: 10,
    width: "100%",
  },
  title: {
    fontSize: 16,
    fontWeight: styleOS("500"),
    textAlign: "center",
  },
  helperText: {
    fontSize: 13,
    fontWeight: styleOS("400"),
    textAlign: "center",
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
});
