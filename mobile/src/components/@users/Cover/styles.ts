import {PALETTE} from "src/styles";
import {StyleSheet} from "react-native";

export const STYLES = StyleSheet.create({
  header: {
    position: "relative",
    height: 180,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  cover_image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  layer: {
    backgroundColor: PALETTE["BLACK006"],
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
  },
  placeholder: {
    width: "100%",
    height: "100%",
    backgroundColor: PALETTE["PRIMARY"],
    justifyContent: "center",
    alignItems: "center",
  },
  change_cover_button: {
    position: "absolute",
    top: 10,
    right: 5,
    width: 180,
    zIndex: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: PALETTE["BLACK05"],
  },
});
