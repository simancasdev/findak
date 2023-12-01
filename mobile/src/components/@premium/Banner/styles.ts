import {StyleSheet} from "react-native";
import {PALETTE, styleOS} from "src/styles";

export const STYLES = StyleSheet.create({
  banner: {
    width: "95%",
    alignSelf: "center",
    padding: 10,
    borderRadius: 5,
    backgroundColor: PALETTE["PRIMARY"],
    shadowColor: PALETTE["BLACK"],
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  crown: {
    backgroundColor: PALETTE["PRIMARY"],
    borderRadius: 100,
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: styleOS("600"),
    fontSize: 15,
  },
  helper_text: {
    fontSize: 11,
  },
});
