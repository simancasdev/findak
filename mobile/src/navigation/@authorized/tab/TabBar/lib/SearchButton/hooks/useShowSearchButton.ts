import {useEffect} from "react";
import {Animated} from "react-native";
import {useTransitionAnimation} from "src/hooks";

export const useShowSearchButton = (): {translateX: Animated.Value} => {
  const [translateX, execute] = useTransitionAnimation(300);

  useEffect(() => {
    execute({toValue: 0, duration: 200, delay: 280});
  }, []);

  return {translateX};
};
