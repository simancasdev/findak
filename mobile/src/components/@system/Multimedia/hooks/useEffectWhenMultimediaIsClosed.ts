import {useEffect} from "react";
import {useAppSelector} from "src/hooks";
import {selectMultimediaState} from "src/redux/slices";

export const useEffectWhenMultimediaIsClosed = (
  effect: () => void,
  deps: any[]
) => {
  const {show} = useAppSelector(selectMultimediaState);
  useEffect(() => {
    if (!show) {
      setTimeout(() => {
        effect();
      }, 500);
    }
  }, [show, ...deps]);
};
