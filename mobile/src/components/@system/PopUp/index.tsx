import {STYLES} from "./styles";
import {View} from "react-native";
import {Touchable} from "../Touchable";
import {closePopUp, selectPopUpState} from "src/redux/slices";
import {useAppDispatch, useAppSelector, useTheme} from "src/hooks";

interface PopUpProps {}

export const PopUp: React.FC<PopUpProps> = () => {
  const {colors} = useTheme();
  const dispatch = useAppDispatch();
  const {view} = useAppSelector(selectPopUpState);

  return typeof view !== "undefined" ? (
    <View style={STYLES["overlay"]}>
      <Touchable
        onPress={() => dispatch(closePopUp())}
        style={[STYLES["pop_up"]]}
      />
      <View
        style={[
          STYLES["container"],
          {backgroundColor: colors["BACKGROUND_VIEW"]},
        ]}
      >
        {view}
      </View>
    </View>
  ) : null;
};
