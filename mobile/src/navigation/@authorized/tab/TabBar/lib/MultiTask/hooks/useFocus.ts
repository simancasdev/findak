import {Animated} from "react-native";
import {useEffect, useRef} from "react";
import {useAppSelector} from "src/hooks";
import {selectNavigatorState} from "src/redux/slices";

export const useFocus = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;
  const {viewFromDrawerNavigation} = useAppSelector(selectNavigatorState);
  const isHighlighted = typeof viewFromDrawerNavigation !== "undefined";

  useEffect(() => {
    if (isHighlighted) {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 480,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: -10,
          duration: 450,
          useNativeDriver: true,
        }),
      ]).start();
      return;
    }

    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  }, [isHighlighted]);

  return {isHighlighted, opacity, translateY};
};
