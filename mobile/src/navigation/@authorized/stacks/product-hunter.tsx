import {useTheme} from "src/hooks";
import {ProductHunter} from "src/views";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

interface ProductHunterStackProps {}

export const ProductHunterStack: React.FC<ProductHunterStackProps> = () => {
  const {colors} = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="Initial"
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: colors["BACKGROUND_TAB_VIEWS"]},
      }}
    >
      <Stack.Screen name="Initial" component={ProductHunter} />
    </Stack.Navigator>
  );
};
