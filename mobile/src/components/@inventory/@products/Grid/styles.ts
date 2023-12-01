import {StyleSheet} from "react-native";

export const STYLES = StyleSheet.create({
  grid: {
    flexWrap: "wrap",
  },
  iventory_item: {
    position: "relative",
    marginBottom: 5,
    overflow: "hidden",
    width: "31.5%",
    height: 140,
  },
  inventory_image: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },
  item_description: {
    padding: 5,
    borderBottomStartRadius: 5,
    borderBottomEndRadius: 5,
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
  },
});
