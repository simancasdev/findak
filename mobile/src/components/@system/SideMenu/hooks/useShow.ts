import {SIDE_MENU_WIDTH} from "../styles";
import {useEffect, useState} from "react";
import {selectSideMenuState} from "src/redux/slices";
import {useAppSelector, useTransitionAnimation} from "src/hooks";

export const useShowSideMenu = () => {
  const {show} = useAppSelector(selectSideMenuState);
  const [displayed, setDisplayed] = useState<boolean>(false);
  const [translateX, execute] = useTransitionAnimation(SIDE_MENU_WIDTH);

  useEffect(() => {
    if (!show) return;
    execute({toValue: 0, duration: 250});
  }, [show]);

  useEffect(() => {
    if (!show && displayed) execute({toValue: SIDE_MENU_WIDTH, duration: 200});
  }, [displayed, show]);

  translateX.addListener((animation) => {
    const {value} = animation;
    if (!value) setDisplayed(true);
  });

  return {translateX};
};
