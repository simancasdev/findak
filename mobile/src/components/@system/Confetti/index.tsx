import {Fragment} from "react";
import {useAppDispatch, useAppSelector} from "src/hooks";
import ConfettiCannon from "react-native-confetti-cannon";
import {selectLayoutState, shootConfetti} from "src/redux/slices";

interface ConfettiProps {}

export const Confetti: React.FC<ConfettiProps> = () => {
  const dispatch = useAppDispatch();
  const {cofetti} = useAppSelector(selectLayoutState);

  return cofetti["fired"] ? (
    <ConfettiCannon
      fadeOut
      count={300}
      fallSpeed={5000}
      origin={{x: 0, y: 0}}
      onAnimationEnd={() => dispatch(shootConfetti(false))}
    />
  ) : (
    <Fragment />
  );
};
