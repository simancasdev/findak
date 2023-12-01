import {styleOS} from "src/styles";
import {StyleSheet} from "react-native";

export const STYLES = StyleSheet.create({
  header: {
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  accesses: {
    width: "100%",
    height: 55,
    paddingHorizontal: 5,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 22,
    fontWeight: styleOS("600"),
  },
});
