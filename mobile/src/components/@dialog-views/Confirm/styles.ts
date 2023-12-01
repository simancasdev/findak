import {styleOS} from "src/styles";
import {StyleSheet} from "react-native";

export const STYLES = StyleSheet.create({
  confirm: {},
  title: {
    fontWeight: styleOS("500"),
    fontSize: 18,
    textAlign: "center",
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
});
