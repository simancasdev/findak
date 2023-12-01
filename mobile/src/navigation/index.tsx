import {useAppLayout} from "./hooks";
import {Animated} from "react-native";
import {Authorized, Welcome} from ".";
import {useInitApp} from "./useInitApp";
import {useAppSelector} from "../hooks";
import {selectAuthState} from "../redux/slices";

interface FindakProps {}

export const Findak: React.FC<FindakProps> = () => {
  useInitApp();
  const {appLayoutTranslateX} = useAppLayout();
  const {isLogged} = useAppSelector(selectAuthState);

  return (
    <Animated.View
      style={{flex: 1, transform: [{translateX: appLayoutTranslateX}]}}
    >
      {isLogged ? <Authorized /> : <Welcome />}
    </Animated.View>
  );
};

export * from "./@authorized";
export * from "./@welcome";
