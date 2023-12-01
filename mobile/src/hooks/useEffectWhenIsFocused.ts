import {useEffect} from "react";
import {useIsFocused} from "@react-navigation/native";

export const useEffectWhenIsFocused = (
  effect: () => void,
  deps: any[]
): void => {
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) effect();
  }, [isFocused, ...deps]);
};
