import {STYLES} from "./styles";
import {useShowAlert} from "./hooks";
import {TValue} from "src/languages";
import {Animated} from "react-native";
import {getDefaultIcon} from "./helper";
import {selectAlertState} from "src/redux/slices";
import {useAppSelector, useLang} from "src/hooks";
import {Column, Touchable, Row, Typography} from "..";

interface AlertProps {}

export const Alert: React.FC<AlertProps> = () => {
  const {t} = useLang();
  const {translateY, close} = useShowAlert();
  const {message, type, icon, translate} = useAppSelector(selectAlertState);

  return (
    <Animated.View style={[STYLES["alert"], {transform: [{translateY}]}]}>
      <Touchable
        style={[STYLES["alert_box"], type && STYLES[type]]}
        onPress={close}
      >
        <Row gap={10}>
          {icon ?? getDefaultIcon(type)}
          <Column>
            <Typography style={STYLES["title"]}>
              {translate ? t(message as TValue) : message}
            </Typography>
          </Column>
        </Row>
      </Touchable>
    </Animated.View>
  );
};
