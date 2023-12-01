import {Animated} from "react-native";
import {useCallback, useRef} from "react";

export type TransitionAnimationPayload = {
  delay?: number;
  toValue: number;
  duration?: number;
  callback?: () => void;
};

export const useTransitionAnimation = (
  initialValue: number
): [
  value: Animated.Value,
  execute: (payload: TransitionAnimationPayload) => void
] => {
  const value = useRef(new Animated.Value(initialValue)).current;

  const execute = useCallback(
    ({
      toValue,
      callback,
      delay = 0,
      duration = 0,
    }: TransitionAnimationPayload): void => {
      Animated.timing(value, {
        delay,
        toValue,
        duration,
        useNativeDriver: true,
      }).start();
      if (typeof callback !== "undefined") callback();
    },
    []
  );

  return [value, execute];
};
