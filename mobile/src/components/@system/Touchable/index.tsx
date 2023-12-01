import {TouchableOpacity} from "react-native";
import {TouchableOpacityProps} from "react-native";

interface TouchableProps extends TouchableOpacityProps {}

export const Touchable: React.FC<TouchableProps> = ({
  onPress,
  children,
  ...props
}) => {
  return (
    <TouchableOpacity
      {...props}
      accessibilityRole="button"
      onPress={onPress}
      activeOpacity={0.8}
    >
      {children}
    </TouchableOpacity>
  );
};
