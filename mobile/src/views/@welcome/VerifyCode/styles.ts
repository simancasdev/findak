import {StyleSheet} from "react-native";
import {PALETTE, styleOS} from "src/styles";

export const STYLES = StyleSheet.create({
  header: {
    marginTop: 15,
    marginBottom: 30,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 17,
    width: "65%",
    fontWeight: "500",
    textAlign: "center",
  },
  input: {
    borderWidth: 0,
    backgroundColor: "white",
    borderBottomWidth: 1,
    fontWeight: styleOS("500"),
    width: 150,
    letterSpacing: 6,
    fontSize: 16,
    textAlign: "center",
  },
  try_again: {
    fontSize: 12,
    color: PALETTE["GREY"],
  },
});
