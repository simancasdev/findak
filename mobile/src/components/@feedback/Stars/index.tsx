import {Star} from "src/svg";
import {PALETTE} from "src/styles";
import {Animated} from "react-native";
import {useEffect, useState} from "react";
import {Row, Touchable} from "../../@system";
import {StarValue, Style} from "src/interfaces";
import {useTheme, useTransitionAnimation} from "src/hooks";

interface StarsProps extends Style {
  gap?: number;
  starSize?: number;
  defaultValue?: StarValue;
  mountWithAnimation?: boolean;
  onChange?: (star: number) => void;
}

export const Stars: React.FC<StarsProps> = ({
  style,
  onChange,
  gap = 15,
  starSize = 34,
  defaultValue = 0,
  mountWithAnimation = false,
}) => {
  const {colors} = useTheme();
  const stars: number[] = [1, 2, 3, 4, 5];
  const [feedback, setFeedback] = useState<number>(0);
  const [translateX, execute] = useTransitionAnimation(
    mountWithAnimation ? 20 : 0
  );
  const [showStars, setShowStars] = useState<boolean>(!mountWithAnimation);
  const READ_ONLY = typeof onChange === "undefined";

  useEffect(() => {
    setFeedback(defaultValue ?? 0);
  }, [defaultValue]);

  useEffect(() => {
    if (!mountWithAnimation) return;
    setTimeout(() => {
      setShowStars(true);
      execute({toValue: 0, duration: 200});
    }, 500);
  }, [mountWithAnimation]);

  return showStars ? (
    <Animated.View style={{transform: [{translateX}]}}>
      <Row style={style} gap={gap} marginVertical={0}>
        {stars.map((id) => {
          const marked = id <= feedback;
          return (
            <Touchable
              key={id}
              disabled={READ_ONLY}
              onPress={() => {
                if (READ_ONLY) return;
                setFeedback(id);
                onChange(id);
              }}
            >
              <Star
                size={starSize}
                strokeWidth={marked ? 0 : 1}
                fill={marked ? PALETTE["STAR"] : PALETTE["TRANSPARENT"]}
                color={colors["WHITE_BLACK"]}
              />
            </Touchable>
          );
        })}
      </Row>
    </Animated.View>
  ) : null;
};
