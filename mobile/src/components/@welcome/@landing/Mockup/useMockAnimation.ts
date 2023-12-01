import {Animated} from "react-native";
import {useEffect, useState} from "react";

const DURATION_ON_STAGE = 6000;

export const useMockAnimation = (changeMockupIndex: () => void) => {
  const [opacity] = useState(new Animated.Value(0));
  const [translateY] = useState(new Animated.Value(100));

  useEffect(() => {
    function loop() {
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 400,
          delay: 500,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: -50,
          duration: 500,
          delay: DURATION_ON_STAGE,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 100,
          duration: 100,
          delay: 0,
          useNativeDriver: true,
        }),
      ]).start(() => {
        changeMockupIndex();
        loop();
      });
    }
    loop();
  }, []);

  return {opacity, translateY};
};
