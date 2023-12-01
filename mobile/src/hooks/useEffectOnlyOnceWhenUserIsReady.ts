import {UserModel} from "../interfaces";
import {useEffect, useState} from "react";
import {useAppSelector} from "./useAppSelector";
import {selectAuthState} from "../redux/slices";

export const useEffectOnlyOnceWhenUserIsReady = (
  effect: () => void,
  deps: any[]
): void => {
  const {user} = useAppSelector(selectAuthState);
  const [executed, setExecuted] = useState<boolean>(false);
  const [userPresaved, setUserPresaved] = useState<UserModel | undefined>();

  useEffect(() => {
    if (typeof userPresaved === "undefined") return;
    if (JSON.stringify(user) !== JSON.stringify(userPresaved)) {
      setExecuted(false);
    }
  }, [user, userPresaved]);

  useEffect(() => {
    if (!!user["id"] && !executed) {
      effect();
      setExecuted(true);
      setUserPresaved(user);
    }
  }, [user, executed, ...deps]);
};
