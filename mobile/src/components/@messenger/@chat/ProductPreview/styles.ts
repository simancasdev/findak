import {WIDTH_SCREEN} from "src/utils";
import {StyleSheet} from "react-native";
import {PALETTE, styleOS} from "src/styles";

export const STYLES = StyleSheet.create({
  overlap: {
    top: 60,
    right: 6,
    position: "absolute",
    zIndex: 999,
  },
  product_preview: {
    padding: 5,
    width: WIDTH_SCREEN - 50,
    borderRadius: 5,
    shadowColor: PALETTE["BLACK"],
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  product_cover: {
    width: 50,
    height: "100%",
    borderRadius: 5,
  },
  title: {
    fontWeight: styleOS("500"),
  },
  desciption: {
    fontSize: 12,
  },
  price: {
    fontWeight: styleOS("600"),
  },
});
