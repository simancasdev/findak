import {Fragment} from "react";
import {View} from "react-native";
import {useAppSelector, useTheme} from "../hooks";
import {HEIGHT_SCREEN, WIDTH_SCREEN} from "../utils";
import {selectAuthState, selectLayoutState} from "../redux/slices";

interface EdgesProps {}

export const Edges: React.FC<EdgesProps> = () => {
  const {colors} = useTheme();
  const {edges} = useAppSelector(selectLayoutState);
  const {isLogged} = useAppSelector(selectAuthState);

  const DEFAULT_EDGES_COLOR = isLogged
    ? colors["EDGES"]
    : colors["BACKGROUND_WELCOME_VIEWS"];

  return (
    <Fragment>
      <View
        style={{
          position: "absolute",
          top: -HEIGHT_SCREEN / 2,
          left: 0,
          zIndex: -1,
          width: WIDTH_SCREEN,
          height: HEIGHT_SCREEN,
          backgroundColor: edges["topColor"] ?? DEFAULT_EDGES_COLOR,
        }}
      />
      <View
        style={{
          position: "absolute",
          top: HEIGHT_SCREEN / 2,
          left: 0,
          zIndex: -1,
          width: WIDTH_SCREEN,
          height: HEIGHT_SCREEN,
          backgroundColor: edges["bottomColor"] ?? DEFAULT_EDGES_COLOR,
        }}
      />
    </Fragment>
  );
};
