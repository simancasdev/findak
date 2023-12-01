import {PALETTE} from "src/styles";
import {StyleSheet} from "react-native";

export const STYLES = StyleSheet.create({
  uploader: {},
  asset: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  preview: {
    width: 80,
    height: 80,
    marginLeft: 10,
    position: "relative",
  },
  preview_image: {
    borderRadius: 5,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  delete_button: {
    width: 25,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 4,
    right: 4,
    borderRadius: 100,
    backgroundColor: PALETTE["BLACK03"],
    shadowColor: PALETTE["BLACK"],
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
});
