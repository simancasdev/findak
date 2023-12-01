import {styleOS} from "src/styles";
import {StyleSheet} from "react-native";

export const STYLES = StyleSheet.create({
  links: {
    marginTop: 10,
    width: "100%",
  },
  link: {
    padding: 10,
    paddingHorizontal: 20,
    width: "100%",
  },
  link_label: {
    fontSize: 17,
    fontWeight: styleOS("500"),
  },
});
