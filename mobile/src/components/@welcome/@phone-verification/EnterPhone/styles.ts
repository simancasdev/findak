import {StyleSheet} from "react-native";
import {styleOS} from "src/styles";

export const STYLES = StyleSheet.create({
  enter_phone: {
    padding: 10,
  },
  flag: {
    width: 40,
    height: 25,
    resizeMode: "cover",
    borderRadius: 5,
  },
  prefix: {
    fontSize: 14,
    fontWeight: styleOS("500"),
  },
  change_country: {
    fontSize: 11,
    position: "absolute",
    bottom: -15.5,
  },
  input: {
    width: 185,
    fontSize: 16,
    borderWidth: 0,
    letterSpacing: 4,
    borderBottomWidth: 1,
    backgroundColor: "white",
  },
});
