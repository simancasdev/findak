import {useEffect} from "react";
import {selectLayoutState} from "src/redux/slices";
import {DRAWER_DURATION, DRAWER_WIDTH} from "../styles";
import {useAppSelector, useTransitionAnimation} from "src/hooks";

export const useOpenDrawer = () => {
  const {drawerOpened} = useAppSelector(selectLayoutState);
  const [translateX, execute] = useTransitionAnimation(-DRAWER_WIDTH);

  useEffect(() => {
    if (drawerOpened) {
      execute({toValue: 0, duration: DRAWER_DURATION});
      return;
    }
    execute({toValue: -DRAWER_WIDTH, duration: DRAWER_DURATION - 150});
  }, [drawerOpened]);

  return {translateX};
};
