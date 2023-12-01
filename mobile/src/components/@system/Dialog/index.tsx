import {X} from "src/svg";
import {STYLES} from "./styles";
import {PALETTE} from "src/styles";
import {Fragment, useEffect} from "react";
import {Animated, View} from "react-native";
import {Touchable, Row, DialogButton} from "../";
import {closeDialog, selectDialogState} from "src/redux/slices";
import {
  useTheme,
  useAppDispatch,
  useAppSelector,
  useTransitionAnimation,
} from "src/hooks";

interface DialogProps {}

const INITIAL_TRANSLATE_Y = 100;

export const Dialog: React.FC<DialogProps> = () => {
  const dispatch = useAppDispatch();
  const {colors} = useTheme();
  const [translateY, execute] = useTransitionAnimation(INITIAL_TRANSLATE_Y);
  const {
    show,
    view,
    actions,
    UIProps = {showCloseButton: false},
  } = useAppSelector(selectDialogState);
  const {showCloseButton} = UIProps;

  useEffect(() => {
    if (show) execute({toValue: 0, duration: 200});
    return () => {
      execute({toValue: INITIAL_TRANSLATE_Y});
    };
  }, [show]);

  return show ? (
    <View style={STYLES["overlap"]}>
      <Animated.View
        style={[
          STYLES["dialog"],
          {backgroundColor: colors["DIALOG"]},
          {transform: [{translateY}]},
        ]}
      >
        {showCloseButton && (
          <Row justifyContent="flex-end">
            <Touchable onPress={() => {}} style={STYLES["close_button"]}>
              <X color={PALETTE["BLACK02"]} />
            </Touchable>
          </Row>
        )}
        {view && <View style={STYLES["body"]}>{view}</View>}
        {actions?.map(({onPress, type = "secondary", ...actionProps}, key) => (
          <DialogButton
            key={key}
            type={type}
            {...actionProps}
            onPress={() => {
              if (typeof onPress !== "undefined") return onPress();
              dispatch(closeDialog());
            }}
          />
        ))}
      </Animated.View>
    </View>
  ) : (
    <Fragment />
  );
};
