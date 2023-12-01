import {HEIGHT_SCREEN} from "src/utils";
import {useEffect, useState} from "react";
import {selectMultimediaState} from "src/redux/slices";
import {useAppSelector, useTransitionAnimation} from "src/hooks";

export const useShowMultimedia = () => {
  const {show} = useAppSelector(selectMultimediaState);
  const [displayed, setDisplayed] = useState<boolean>(false);
  const [translateY, execute] = useTransitionAnimation(HEIGHT_SCREEN);

  useEffect(() => {
    if (!show) return;
    execute({toValue: 0, duration: 300});
  }, [show]);

  useEffect(() => {
    if (!show && displayed) execute({toValue: HEIGHT_SCREEN, duration: 250});
  }, [displayed, show]);

  translateY.addListener((animation) => {
    const {value} = animation;
    if (!value) setDisplayed(true);
  });

  return {translateY};
};
