import {useEffect} from "react";
import {useAppSelector} from "./useAppSelector";
import {selectAuthState} from "../redux/slices";

export const useEffectWhenUserIsReady = (
  effect: () => void,
  deps: any[]
): void => {
  const {user} = useAppSelector(selectAuthState);

  useEffect(() => {
    if (!!user["id"]) effect();
  }, [user, ...deps]);
};
