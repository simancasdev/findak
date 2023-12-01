import {STYLES} from "./styles";
import {useEffect} from "react";
import {Animated} from "react-native";
import {toggleDrawer} from "src/redux/slices";
import {Touchable} from "src/components/@system";
import {BlurView} from "@react-native-community/blur";
import {useAppDispatch, useTheme, useTransitionAnimation} from "src/hooks";

interface CloseDrawerProps {}

export const CloseDrawer: React.FC<CloseDrawerProps> = () => {
  const {theme} = useTheme();
  const dispatch = useAppDispatch();
  const [opacity, execute] = useTransitionAnimation(0);

  useEffect(() => {
    execute({toValue: 1, duration: 500, delay: 100});
  }, []);

  return (
    <Animated.View style={[STYLES["close_layer"], {opacity}]}>
      <Touchable
        activeOpacity={0}
        style={{width: "100%", height: "100%"}}
        onPress={() => dispatch(toggleDrawer(false))}
        children={
          <BlurView
            blurType={theme}
            blurAmount={2}
            style={STYLES["close_layer"]}
            reducedTransparencyFallbackColor="white"
          />
        }
      />
    </Animated.View>
  );
};
