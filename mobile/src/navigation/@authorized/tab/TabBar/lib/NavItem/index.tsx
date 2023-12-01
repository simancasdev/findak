import {useEffect} from "react";
import {STYLES} from "./styles";
import {getSvg} from "./helper";
import {Animated} from "react-native";
import {NavItemConfig} from "src/interfaces";
import {Touchable} from "src/components/@system";
import {useNavigation} from "@react-navigation/native";
import {useSound, useTheme, useTransitionAnimation} from "src/hooks";

interface NavItemProps {
  config: NavItemConfig;
}

export const NavItem: React.FC<NavItemProps> = ({config}) => {
  const {theme} = useTheme();
  const {navigate} = useNavigation();
  const sound = useSound("tab_item_press.mp3");
  const {isFocused, name, tabIndex} = config;
  const [translateY, execute] = useTransitionAnimation(50);

  useEffect(() => {
    const delay = (tabIndex + 1) * 100;
    execute({toValue: 0, duration: 100, delay});
  }, []);

  return (
    <Animated.View style={{transform: [{translateY}]}}>
      <Touchable
        style={STYLES["item"]}
        onPress={() => {
          sound.play();
          // @ts-expect-error
          navigate(name);
        }}
      >
        {getSvg(name, isFocused, theme)}
      </Touchable>
    </Animated.View>
  );
};
