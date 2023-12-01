import {View} from "react-native";
import {useTheme} from "src/hooks";
import {Children, Style} from "src/interfaces";

interface ContainerProps extends Children<any>, Style {}

export const Container: React.FC<ContainerProps> = ({children, style}) => {
  const {colors} = useTheme();
  return (
    <View style={[{backgroundColor: colors["CONTAINER"]}, style]}>
      {children}
    </View>
  );
};
