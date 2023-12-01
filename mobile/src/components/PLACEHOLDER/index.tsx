import {STYLES} from "./styles";
import {View} from "react-native";

interface PLACEHOLDERProps {}

export const PLACEHOLDER: React.FC<PLACEHOLDERProps> = () => {
  return <View style={STYLES["PLACEHOLDER"]}></View>;
};
