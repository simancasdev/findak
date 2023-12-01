import {View} from "react-native";
import {useTheme} from "src/hooks";
import {Margins} from "src/interfaces";

interface DividerProps extends Margins {}

export const Divider: React.FC<DividerProps> = ({
  marginTop,
  marginBottom,
  marginVertical = 10,
}) => {
  const {colors} = useTheme();
  return (
    <View
      style={{
        marginTop,
        marginBottom,
        marginVertical,
        alignSelf: "center",
        width: "100%",
        height: 0.3,
        backgroundColor: colors["BORDER"],
      }}
    />
  );
};
