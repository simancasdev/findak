import {Animated} from "react-native";
import {useCallback, useEffect} from "react";
import {closeAlert, selectAlertState} from "src/redux/slices";
import {
  useAppDispatch,
  useAppSelector,
  useTransitionAnimation,
} from "src/hooks";

const CLOSE_ALERT_AT = 5000;

export const useShowAlert = (): {
  translateY: Animated.Value;
  close: () => void;
} => {
  const dispatch = useAppDispatch();
  const [translateY, execute] = useTransitionAnimation(-250);
  const {show} = useAppSelector(selectAlertState);

  const close = useCallback(() => {
    execute({
      toValue: -250,
      duration: 300,
      callback: () => {
        setTimeout(() => {
          dispatch(closeAlert());
        }, 1000);
      },
    });
  }, []);

  useEffect(() => {
    if (!show) return;

    execute({toValue: 50, duration: 300});
    setTimeout(() => {
      close();
    }, CLOSE_ALERT_AT);
  }, [show]);

  return {translateY, close};
};
