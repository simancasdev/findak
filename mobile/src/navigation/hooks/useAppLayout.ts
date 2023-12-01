import {useEffect} from "react";
import {selectLayoutState} from "src/redux/slices";
import {useAppSelector, useTransitionAnimation} from "src/hooks";
import {
  DRAWER_WIDTH,
  DRAWER_DURATION,
} from "src/components/@system/Drawer/styles";

export const useAppLayout = () => {
  const {drawerOpened} = useAppSelector(selectLayoutState);
  const [appLayoutTranslateX, execute] = useTransitionAnimation(0);

  useEffect(() => {
    if (drawerOpened) {
      execute({toValue: DRAWER_WIDTH, duration: DRAWER_DURATION});
      return;
    }
    execute({toValue: 0, duration: DRAWER_DURATION});
  }, [drawerOpened]);

  return {appLayoutTranslateX};
};
