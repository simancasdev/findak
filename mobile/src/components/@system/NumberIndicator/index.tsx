import {STYLES} from "./styles";
import {View} from "react-native";
import {PALETTE} from "src/styles";
import {Typography} from "../Typography";

interface NumberIndicatorProps {
  size?: number;
  number: number;
  color?: string;
  fontSize?: number;
  indicatorColor?: string;
}

const MAX_DISPLAY_NUMBER = 99;

export const NumberIndicator: React.FC<NumberIndicatorProps> = ({
  number,
  size = 30,
  fontSize = 16,
  color = PALETTE["WHITE"],
  indicatorColor = PALETTE["PRIMARY"],
}) => {
  return (
    <View
      style={[
        STYLES["indicator"],
        {backgroundColor: indicatorColor, width: size, height: size},
      ]}
    >
      <Typography style={[STYLES["indicator_number"], {color, fontSize}]}>
        {number > MAX_DISPLAY_NUMBER ? MAX_DISPLAY_NUMBER : number}
      </Typography>
    </View>
  );
};
